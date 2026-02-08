#!/bin/bash
# SSA 홈페이지 콘텐츠 동기화 스크립트
# 사용법: npm run sync
#
# 기능:
# 1. GitHub에서 SSA 앱 README를 가져와 content.ts의 텍스트를 업데이트
# 2. screenshots-input/ 폴더의 이미지를 리사이즈하여 public/images/에 배치

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
SCREENSHOTS_INPUT="$PROJECT_DIR/screenshots-input"
SCREENSHOTS_OUTPUT="$PROJECT_DIR/public/images"

echo "=== SSA 홈페이지 콘텐츠 동기화 ==="
echo ""

# --- 1. README 동기화 ---
echo "[1/2] GitHub README 확인 중..."

README_CONTENT=$(curl -s "https://api.github.com/repos/joon2322/SSA/readme" | python3 -c "
import sys, json, base64
data = json.load(sys.stdin)
print(base64.b64decode(data['content']).decode('utf-8'))
" 2>/dev/null)

if [ -z "$README_CONTENT" ]; then
    echo "  ⚠️  README를 가져올 수 없습니다. 텍스트 동기화를 건너뜁니다."
else
    SUBTITLE=$(echo "$README_CONTENT" | grep -A1 "^## " | head -2 | tail -1 | sed 's/^[[:space:]]*//')

    echo "  ✅ README 가져오기 성공"
    echo ""
    echo "  현재 README 슬로건: $SUBTITLE"
    echo ""
    echo "  📝 README 내용이 변경되었다면 src/data/content.ts를 수동으로 업데이트하세요."
    echo "     자동 파싱은 README 구조가 변경될 수 있어 수동 확인을 권장합니다."
    echo ""
    echo "  README 전문은 다음 명령어로 확인:"
    echo "    curl -s https://api.github.com/repos/joon2322/SSA/readme | python3 -c \"import sys,json,base64; print(base64.b64decode(json.load(sys.stdin)['content']).decode())\" | less"
fi

# --- 2. 스크린샷 동기화 ---
echo "[2/2] 스크린샷 확인 중..."

if [ ! -d "$SCREENSHOTS_INPUT" ]; then
    mkdir -p "$SCREENSHOTS_INPUT"
    echo "  📁 screenshots-input/ 폴더를 생성했습니다."
    echo "  새 스크린샷을 이 폴더에 넣고 다시 실행하세요."
    echo ""
    echo "  파일 이름 규칙:"
    echo "    screen_splash.png   — 앱 시작 화면"
    echo "    screen_notes.png    — 노트 목록"
    echo "    screen_mask_edit.png — 가림막 편집"
    echo "    screen_study.png    — 학습 모드"
    echo "    screen_grading.png  — 채점하기"
    echo "    screen_result.png   — 평가 결과"
    echo ""
    echo "  또는 아무 이름의 PNG/JPG를 넣으면 순서대로 배치됩니다."
    exit 0
fi

IMAGE_COUNT=$(find "$SCREENSHOTS_INPUT" -maxdepth 1 \( -name "*.png" -o -name "*.PNG" -o -name "*.jpg" -o -name "*.JPG" -o -name "*.jpeg" \) 2>/dev/null | wc -l | tr -d ' ')

if [ "$IMAGE_COUNT" -eq 0 ]; then
    echo "  📭 screenshots-input/에 이미지가 없습니다. 스크린샷 동기화를 건너뜁니다."
else
    echo "  📷 $IMAGE_COUNT개의 이미지를 발견했습니다."
    echo ""

    DEFAULT_NAMES=("screen_splash" "screen_notes" "screen_mask_edit" "screen_study" "screen_grading" "screen_result")

    HAS_NAMED_FILES=false
    for name in "${DEFAULT_NAMES[@]}"; do
        if [ -f "$SCREENSHOTS_INPUT/${name}.png" ] || [ -f "$SCREENSHOTS_INPUT/${name}.PNG" ]; then
            HAS_NAMED_FILES=true
            break
        fi
    done

    if [ "$HAS_NAMED_FILES" = true ]; then
        echo "  이름이 지정된 파일을 사용합니다."
        for name in "${DEFAULT_NAMES[@]}"; do
            SRC=$(find "$SCREENSHOTS_INPUT" -maxdepth 1 -iname "${name}.*" | head -1)
            if [ -n "$SRC" ]; then
                sips -Z 750 "$SRC" --out "$SCREENSHOTS_OUTPUT/${name}.png" >/dev/null 2>&1
                echo "    ✅ ${name}.png (리사이즈 완료)"
            fi
        done
    else
        echo "  파일을 이름순으로 정렬하여 순서대로 배치합니다."
        IDX=0
        for SRC in $(find "$SCREENSHOTS_INPUT" -maxdepth 1 \( -name "*.png" -o -name "*.PNG" -o -name "*.jpg" -o -name "*.JPG" -o -name "*.jpeg" \) | sort); do
            if [ $IDX -lt ${#DEFAULT_NAMES[@]} ]; then
                NAME="${DEFAULT_NAMES[$IDX]}"
                sips -Z 750 "$SRC" --out "$SCREENSHOTS_OUTPUT/${NAME}.png" >/dev/null 2>&1
                echo "    ✅ $(basename "$SRC") → ${NAME}.png (리사이즈 완료)"
                IDX=$((IDX + 1))
            fi
        done
    fi

    echo ""
    echo "  스크린샷 업데이트 완료! screenshots-input/ 폴더를 비울까요?"
    echo "  비우려면: rm screenshots-input/*"
fi

echo ""
echo "=== 동기화 완료 ==="
echo ""
echo "다음 단계:"
echo "  1. 변경사항 확인: npm run dev"
echo "  2. 빌드: npm run build"
echo "  3. 배포: vercel --yes --prod --token TOKEN"
