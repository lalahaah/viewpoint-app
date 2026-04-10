# Update Task 01: 메인 랜딩 페이지 UI 디테일 및 카테고리 로직 수정

현재 구현된 메인 페이지(`/` 또는 `ChannelGrid`, `ChannelCard`, `ShuffleHero` 관련 파일)에서 다음 4가지 UI/UX 수정 사항을 정확하게 반영해 주십시오.

## 1. Hero Section 이미지 그리드 배경색 제거

- **Target File**: `src/components/ui/ShuffleHero.tsx` (또는 관련 Hero 컴포넌트)
- **Action**: 우측 이미지 그리드(`<ShuffleGrid />`)를 감싸고 있는 부모 `div`의 배경색(예: `bg-gray-50` 또는 회색빛 배경)을 완전히 제거하고 `bg-transparent` 또는 `bg-white`로 변경하여 깔끔하게 만들어라.

## 2. 카테고리 필터 텍스트 및 로직 수정

- **Target File**: `src/app/page.tsx` 또는 `src/components/channel/ChannelGrid.tsx` (필터 상태 관리 파일)
- **Action**:

1. 카테고리 목록 배열(Array)에서 **"오픈 예정"** 항목을 완전히 삭제하라. (하단 '상태' 필터에 이미 존재하므로 중복됨)
1. 카테고리 맨 앞의 **"ALL"** 텍스트를 **"전체"**로 한글화하여 수정하라.

## 3. 필터바(Category & Status) 세로선 정렬 (Grid Alignment)

- **Target File**: `src/app/page.tsx` 또는 `src/components/channel/ChannelGrid.tsx`
- **Action**:

- 상단 카테고리 줄("전체", "테크/IT", "뷰티/패션" 등)과 하단 상태 필터 줄("전체", "운영 중", "오픈 예정")의 **세로 구분선(Border)이 완벽하게 일치하도록** 너비를 맞춰라.
- *Hint*: 두 줄의 앞쪽 3개 요소("전체", "상태1", "상태2")의 `width`를 고정 픽셀(예: `w-24` 또는 `w-32`)로 동일하게 부여하거나, CSS Grid를 사용하여 세로선이 일치하도록 정렬할 것.

## 4. ChannelCard 뱃지 정렬 및 테두리 보완

- **Target File**: `src/components/channel/ChannelCard.tsx`
- **Action**:

1. **테두리 복구**: 현재 카드 상단 테두리가 안 보이는 현상이 있다. 카드 최상위 부모 컨테이너에 `border border-black`이 4면 모두 확실하게 적용되어 있는지 확인하고 수정하라.
1. **뱃지 위치 변경**: 현재 왼쪽 상단에 있는 '운영 여부(ACTIVE/PRE-LAUNCH)' 뱃지와 우측 상단에 있는 '카테고리' 뱃지를 **모두 우측 상단에 세로로 차례대로 배치**하라. (예: Flex-col 컨테이너를 사용하여 위쪽엔 상태, 바로 아래쪽엔 카테고리가 오도록 우측 정렬)