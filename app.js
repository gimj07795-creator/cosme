// 이미지 로드 실패 시 귀여운 파스텔 SVG 백업 데이터
    const FALLBACK_BEAUTY_SVG = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23FFF4F0'/%3E%3Ccircle cx='200' cy='150' r='80' fill='%23FFE2EB'/%3E%3Ctext x='200' y='145' font-size='42' text-anchor='middle' dominant-baseline='middle'%3E💄%3C/text%3E%3Ctext x='200' y='185' font-size='15' fill='%23FF7B95' font-family='sans-serif' font-weight='bold' text-anchor='middle'%3EMongsil Beauty Pick%3C/text%3E%3C/svg%3E";

    /* ==========================================
       1. 내장 화장품 데이터베이스 (28+ 인기 브랜드 실전 화장품)
       ========================================== */
    const COSMETICS_DATABASE = [
      // [베이스 카테고리]
      {
        id: "base_01",
        brand: "헤라 (HERA)",
        name: "블랙 쿠션 파운데이션 SPF34 PA++",
        category: "쿠션/베이스",
        categoryKey: "base",
        finish: "semi_matte",
        personalColor: ["all", "spring", "summer", "fall", "winter"],
        skinType: ["oily", "dehydrated_oily", "combination"],
        vibe: ["chic", "natural", "shade"],
        img: "https://images.unsplash.com/photo-1631730486784-545631bc2a49?auto=format&fit=crop&w=700&q=80",
        features: ["초밀착 세미매트", "24시간 롱래스팅", "모공 블러링"],
        desc: "피부 결점을 얇고 가볍게 감싸주며, 마스크나 땀에도 끄떡없는 초밀착 지속력 1위 쿠션.",
        sheepComment: "지성 & 수부지 피부의 유분을 싹 메워주고 보송한 벨벳 피니쉬를 온종일 유지해줘요!"
      },
      {
        id: "base_02",
        brand: "클리오 (CLIO)",
        name: "킬커버 메쉬 글로우 쿠션",
        category: "쿠션/베이스",
        categoryKey: "base",
        finish: "glow",
        personalColor: ["all", "spring", "summer"],
        skinType: ["dry", "combination", "sensitive"],
        vibe: ["lovely", "natural", "glam"],
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
        features: ["맑은 핑크빛 결광", "풍부한 에센스 보습", "속건조 제로"],
        desc: "촘촘한 메쉬망을 거쳐 얇고 균일하게 발리며, 맑고 투명한 햇살 물광을 연출하는 수분 쿠션.",
        sheepComment: "건성 피부의 각질을 부드럽게 잠재우고 속에서 뿜어져 나오는 맑은 도자기 광채를 줘요!"
      },
      {
        id: "base_03",
        brand: "에스쁘아 (espoir)",
        name: "프로 테일러 비벨벳 커버 쿠션 뉴클래스",
        category: "쿠션/베이스",
        categoryKey: "base",
        finish: "matte",
        personalColor: ["all", "fall", "winter"],
        skinType: ["oily", "dehydrated_oily"],
        vibe: ["chic", "glam"],
        img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
        features: ["하이엔드 벨벳 매트", "강력한 잡티 커버", "비건 인증"],
        desc: "파우더를 바른 듯 겉은 완벽하게 실키하고 속은 건조하지 않은 반전 매트 쿠션.",
        sheepComment: "완벽한 커버력과 시크한 매트 스킨을 원할 때 단 한 겹으로 결점 없는 깐달걀 피부 완성!"
      },
      {
        id: "base_04",
        brand: "토리든 (Torriden)",
        name: "다이브인 저분자 히알루론산 수분 톤업 선크림",
        category: "선케어/톤업",
        categoryKey: "base",
        finish: "glow",
        personalColor: ["all", "summer", "spring"],
        skinType: ["sensitive", "dry", "combination"],
        vibe: ["natural"],
        img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
        features: ["순한 무기자차", "자연스러운 생기 톤업", "저자극 진정"],
        desc: "민감성 피부도 안심하고 사용하는 촉촉한 수분 톤업 베이스 겸용 선크림.",
        sheepComment: "두꺼운 화장 대신 본래 피부가 좋은 것처럼 연출할 때 최고의 선택이에요!"
      },
      {
        id: "base_05",
        brand: "바닐라코 (BANILA CO)",
        name: "커버리셔스 얼티밋 화이트 쿠션",
        category: "쿠션/베이스",
        categoryKey: "base",
        finish: "semi_matte",
        personalColor: ["all", "summer", "winter"],
        skinType: ["dehydrated_oily", "combination", "oily"],
        vibe: ["natural", "lovely", "chic"],
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
        features: ["맑은 화이트 세미매트", "오일 컨트롤", "다크닝 제로"],
        desc: "어떤 피부 톤이든 맑고 화사한 첫 화장 그대로 24시간 유지해주는 극강 픽싱 쿠션.",
        sheepComment: "수부지 피부의 무너짐을 완벽하게 방어하고 화사한 쿨톤 피부결을 만들어줘요!"
      },
      {
        id: "base_06",
        brand: "정샘물 (JUNGSAEMMOOL)",
        name: "에센셜 스킨 누더 쿠션",
        category: "쿠션/베이스",
        categoryKey: "base",
        finish: "glow",
        personalColor: ["all", "spring", "fall"],
        skinType: ["dry", "combination", "sensitive"],
        vibe: ["natural", "shade"],
        img: "https://images.unsplash.com/photo-1631730486784-545631bc2a49?auto=format&fit=crop&w=700&q=80",
        features: ["내추럴 누드 스킨", "자연스러운 윤광", "피부 친화 밀착"],
        desc: "전문 메이크업 아티스트의 손길을 거친 듯 투명하고 내추럴하게 감싸주는 클래식 쿠션.",
        sheepComment: "인위적이지 않고 내 피부처럼 자연스럽게 물오른 촉촉 결광을 연출해줍니다."
      },

      // [립 카테고리]
      {
        id: "lip_01",
        brand: "롬앤 (rom&nd)",
        name: "쥬시 래스팅 틴트 [25 베어그레이프]",
        category: "틴트/립",
        categoryKey: "lip",
        personalColor: ["summer", "winter"],
        skinType: ["all", "dry", "sensitive", "combination"],
        vibe: ["lovely", "natural"],
        img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
        features: ["쿨톤 인생 탕후루립", "청순한 포도빛 MLBB", "맑은 광택감"],
        desc: "맑고 투명하게 차오르는 탕후루 광택과 차분한 모브 핑크빛이 매력적인 여름 쿨톤 베스트셀러.",
        sheepComment: "여름 쿨톤의 피부 톤을 화사하게 맑혀주는 청초한 데일리 핑크 포도 컬러예요!"
      },
      {
        id: "lip_02",
        brand: "롬앤 (rom&nd)",
        name: "쥬시 래스팅 틴트 [18 멀드피치]",
        category: "틴트/립",
        categoryKey: "lip",
        personalColor: ["spring"],
        skinType: ["all", "dry", "combination"],
        vibe: ["lovely", "natural"],
        img: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=700&q=80",
        features: ["봄웜 인생 복숭아", "생기 가득 코랄 피치", "지속력 높은 착색"],
        desc: "복숭아 과즙을 그대로 머금은 듯 사랑스럽고 따스한 생기를 불어넣는 코랄 틴트.",
        sheepComment: "봄 웜톤 얼굴에 조명을 켠 듯 상큼한 과즙미를 팡팡 터뜨려줍니다!"
      },
      {
        id: "lip_03",
        brand: "어뮤즈 (AMUSE)",
        name: "젤핏 틴트 [06 서울걸]",
        category: "틴트/립",
        categoryKey: "lip",
        personalColor: ["summer", "winter"],
        skinType: ["all"],
        vibe: ["lovely", "chic"],
        img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80",
        features: ["도톰한 젤리 광택", "끈적임 제로 롱래스팅", "쿨 모브 핑크"],
        desc: "젤리처럼 탱글하게 입술 볼륨을 채워주며 12시간 지속되는 비건 젤핏 틴트.",
        sheepComment: "시간이 지날수록 맑은 젤리 광이 올라와 도톰하고 예쁜 입술을 만들어줘요!"
      },
      {
        id: "lip_04",
        brand: "페리페라 (peripera)",
        name: "잉크 더 에어리 벨벳 [02 셀기꾼템]",
        category: "틴트/립",
        categoryKey: "lip",
        personalColor: ["fall", "spring"],
        skinType: ["all"],
        vibe: ["shade", "natural"],
        img: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=700&q=80",
        features: ["공기처럼 가벼운 벨벳", "감성 브릭 코랄", "보들보들 블러 필터"],
        desc: "꽃잎을 베어 문 듯 포근하고 보송하게 밀착되는 가을 웜톤 최애 브릭 코랄 틴트.",
        sheepComment: "가을 웜톤의 따뜻하고 분위기 있는 음영 메이크업에 찰떡같이 어우러져요!"
      },
      {
        id: "lip_05",
        brand: "맥 (MAC)",
        name: "러스터글래스 립스틱 [씨 쉬어 See Sheer]",
        category: "립스틱",
        categoryKey: "lip",
        personalColor: ["spring", "fall"],
        skinType: ["all", "dry"],
        vibe: ["natural", "lovely", "shade"],
        img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
        features: ["투명하고 촉촉한 샤인", "자연스러운 자몽 핑크 코랄", "보습 케어"],
        desc: "물 먹은 듯 촉촉하게 스며드는 스테디셀러 자몽 핑크 립스틱.",
        sheepComment: "자연스러우면서도 고급스러운 입술 혈색을 주어 꾸안꾸 스타일에 최고예요."
      },
      {
        id: "lip_06",
        brand: "바비브라운 (BOBBI BROWN)",
        name: "크러쉬드 립 컬러 [루비 Ruby]",
        category: "립스틱",
        categoryKey: "lip",
        personalColor: ["winter", "fall"],
        skinType: ["all"],
        vibe: ["chic", "glam"],
        img: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=700&q=80",
        features: ["고혹적인 딥 루비 레드", "자연스러운 새틴 피니쉬", "선명한 발색"],
        desc: "톤 다운된 깊이 있는 루비 컬러로 도시적인 세련미를 완성하는 윈터 시그니처 립.",
        sheepComment: "겨울 쿨톤 특유의 맑고 차가운 피부톤을 가장 극적으로 살려주는 딥 레드예요!"
      },
      {
        id: "lip_07",
        brand: "퓌 (fwee)",
        name: "립앤치크 블러리 푸딩팟 [위드아웃]",
        category: "틴트/팟",
        categoryKey: "lip",
        personalColor: ["summer", "spring"],
        skinType: ["all"],
        vibe: ["natural", "lovely"],
        img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80",
        features: ["퐁신한 푸딩 텍스처", "블러 립 & 치크 듀얼", "소프트 핑크"],
        desc: "손끝으로 톡톡 두드리면 부드럽게 스며드는 퐁신한 블러 텍스처 립앤치크.",
        sheepComment: "입술과 볼을 같은 톤으로 물들여 맑고 청순한 원톤 메이크업을 연출할 수 있어요!"
      },
      {
        id: "lip_08",
        brand: "딘토 (Dinto)",
        name: "블러글로이 립틴트 [281 라디아]",
        category: "틴트/립",
        categoryKey: "lip",
        personalColor: ["fall", "winter"],
        skinType: ["all"],
        vibe: ["shade", "chic"],
        img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
        features: ["고전미 가득 플럼 브라운", "수분 코팅 광택", "고급스러운 착색"],
        desc: "은은한 플럼빛 브라운으로 깊이 있는 고전적 우아함을 선사하는 물빛 글로이 틴트.",
        sheepComment: "차분하면서도 오묘한 분위기를 연출하여 그윽한 시크 룩에 안성맞춤이에요."
      },

      // [아이 & 브로우 카테고리]
      {
        id: "eye_01",
        brand: "데이지크 (dasique)",
        name: "섀도우 팔레트 [03 누드포션]",
        category: "섀도우팔레트",
        categoryKey: "eye",
        personalColor: ["spring", "fall"],
        skinType: ["all"],
        vibe: ["natural", "lovely"],
        img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80",
        features: ["여리여리 누드 베이지", "미세 밀착 텍스처", "맑은 바세린광 글리터"],
        desc: "부드럽고 맑은 누디 베이지 음영과 촉촉한 글리터로 봄 웜톤의 투명한 눈매를 연출하는 팔레트.",
        sheepComment: "절대 실패 없는 차분하고 뽀얀 베이지 음영이라 붓질 한 번으로 청순미 폭발!"
      },
      {
        id: "eye_02",
        brand: "웨이크메이크 (WAKEMAKE)",
        name: "소프트 블러링 아이팔레트 [02 라이브 블러링]",
        category: "섀도우팔레트",
        categoryKey: "eye",
        personalColor: ["summer", "winter"],
        skinType: ["all"],
        vibe: ["lovely", "natural", "chic"],
        img: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=700&q=80",
        features: ["쿨 라벤더 핑크", "16구 섬세한 단계별 음영", "부드러운 블러링"],
        desc: "노란기 쏙 빠진 애쉬 모브와 쿨 핑크 컬러로 부어보이지 않는 여름 쿨톤 전용 팔레트.",
        sheepComment: "눈가가 절대 답답하지 않고 맑고 시원한 쿨톤 눈매를 섬세하게 만들어줘요."
      },
      {
        id: "eye_03",
        brand: "클리오 (CLIO)",
        name: "프로 아이 팔레트 에어 [03 뮤트 라이브러리]",
        category: "섀도우팔레트",
        categoryKey: "eye",
        personalColor: ["fall", "summer"],
        skinType: ["all"],
        vibe: ["shade", "chic"],
        img: "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=700&q=80",
        features: ["가루날림 제로 밀착", "그윽한 뮤트 음영", "데일리 만능 음영"],
        desc: "감성적인 무광 매트 텍스처로 그윽하고 깊이감 있는 가을 무드 음영 메이크업 완성.",
        sheepComment: "분위기 있는 가을 감성을 원한다면 겹겹이 쌓아도 텁텁하지 않은 이 팔레트가 정답!"
      },
      {
        id: "eye_04",
        brand: "어반디케이 (URBAN DECAY)",
        name: "문더스트 아이섀도우 [스페이스 카우보이]",
        category: "싱글글리터",
        categoryKey: "eye",
        personalColor: ["spring", "fall", "all"],
        skinType: ["all"],
        vibe: ["glam", "lovely"],
        img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=80",
        features: ["바세린광 영롱 글리터", "샴페인 펄감", "눈물 글리터 1인자"],
        desc: "애교살과 눈두덩이에 은하수 같은 맑은 샴페인 반짝임을 얹어주는 레전드 글리터.",
        sheepComment: "눈을 깜빡일 때마다 유리알처럼 영롱하게 빛나서 시선을 사로잡아요 ✨"
      },
      {
        id: "eye_05",
        brand: "롬앤 (rom&nd)",
        name: "한올 픽스 마스카라 [롱블랙]",
        category: "마스카라",
        categoryKey: "eye",
        personalColor: ["all"],
        skinType: ["all", "oily"],
        vibe: ["natural", "chic", "glam"],
        img: "https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&w=700&q=80",
        features: ["처짐 없는 C컬 고정", "번짐 없는 강력 워터프루프", "한올한올 뭉침 제로"],
        desc: "아침부터 밤까지 쳐지지 않고 깔끔하고 길쭉한 속눈썹을 고정해주는 픽싱 마스카라.",
        sheepComment: "유분기 많은 눈가에도 번짐 없이 또렷한 인형 속눈썹을 완성해줘요!"
      },
      {
        id: "eye_06",
        brand: "투쿨포스쿨 (too cool for school)",
        name: "아트클래스 바이로댕 쉐딩 [1호 클래식]",
        category: "쉐딩/컨투어",
        categoryKey: "eye",
        personalColor: ["fall", "spring", "all"],
        skinType: ["all"],
        vibe: ["natural", "shade", "chic"],
        img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80",
        features: ["국민 3색 쉐딩", "붉은기 제로 자연스러운 그림자", "콧대 & 턱선 입체감"],
        desc: "대한민국 1등 국민 쉐딩. 붉은기 없이 자연스러운 음영을 선사하는 3단 입체 컨투어링.",
        sheepComment: "콧대와 턱선을 깎아주어 얼굴을 한결 입체적이고 작아 보이게 만들어줘요!"
      },

      // [치크 & 블러셔 카테고리]
      {
        id: "cheek_01",
        brand: "크리니크 (CLINIQUE)",
        name: "치크 팝 [05 누드 팝 Nude Pop]",
        category: "블러셔",
        categoryKey: "cheek",
        personalColor: ["fall", "spring"],
        skinType: ["all", "dry", "combination"],
        vibe: ["shade", "natural"],
        img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=700&q=80",
        features: ["베이크드 맑은 발색", "자연스러운 베이지 누드", "모공 부각 없는 윤기"],
        desc: "가루날림 없이 맑은 수채화처럼 물드는 가을 웜톤의 인생 블러셔.",
        sheepComment: "얼굴형을 자연스럽게 갸름하게 깎아주며 고급스러운 우아함을 연출해줘요!"
      },
      {
        id: "cheek_02",
        brand: "크리니크 (CLINIQUE)",
        name: "치크 팝 [15 팬지 팝 Pansy Pop]",
        category: "블러셔",
        categoryKey: "cheek",
        personalColor: ["summer", "winter"],
        skinType: ["all", "sensitive"],
        vibe: ["lovely", "natural"],
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
        features: ["라벤더 핑크 수채화", "황변 없는 쿨톤 화사함", "자연스러운 혈색"],
        desc: "노란기를 화사하게 잡아주고 뽀얗고 투명한 피부를 극대화하는 라벤더 블러셔.",
        sheepComment: "쿨톤 피부에 올렸을 때 맑은 우유빛 핑크로 변하면서 형광등을 켜줘요!"
      },
      {
        id: "cheek_03",
        brand: "롬앤 (rom&nd)",
        name: "베러 댄 치크 [C02 피치 칩]",
        category: "블러셔",
        categoryKey: "cheek",
        personalColor: ["spring"],
        skinType: ["all", "oily", "combination"],
        vibe: ["lovely", "natural"],
        img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80",
        features: ["뽀얀 복숭아 과즙", "모공 블러 프라이머 효과", "피지 조절 파우더"],
        desc: "모공 요철을 말끔하게 블러 처리해주며 사랑스러운 복숭아 볼을 만들어주는 매트 블러셔.",
        sheepComment: "요철이 고민인 볼가에 톡톡 얹으면 아기 피부처럼 뽀송뽀송해져요!"
      },
      {
        id: "cheek_04",
        brand: "나스 (NARS)",
        name: "블러쉬 [오르가즘 ORGASM]",
        category: "블러셔",
        categoryKey: "cheek",
        personalColor: ["spring", "fall", "all"],
        skinType: ["all", "dry"],
        vibe: ["glam", "lovely"],
        img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=700&q=80",
        features: ["골드 펄 피치 핑크", "입체적인 볼륨감", "글로벌 베스트셀러"],
        desc: "은은한 골드 시머 펄과 피치 핑크가 어우러져 화려하면서도 건강한 생기를 주는 명품 블러셔.",
        sheepComment: "화려한 파티나 특별한 날, 입체적인 광채와 생기를 동시에 뽐낼 수 있어요 ✨"
      },
      {
        id: "cheek_05",
        brand: "페리페라 (peripera)",
        name: "맑게 물든 커스텀 치크 [01 핑키쉬 하모니]",
        category: "블러셔",
        categoryKey: "cheek",
        personalColor: ["summer", "winter"],
        skinType: ["all"],
        vibe: ["lovely", "chic"],
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
        features: ["뽀얀 쿨 핑크 하모니", "톤 맞춤 커스텀 듀오", "가루날림 최소화"],
        desc: "흰 기 가득한 페일 핑크와 화사한 로즈 핑크를 믹스하여 맞춤 쿨톤 볼터치를 완성하는 치크.",
        sheepComment: "두 가지 색을 믹스해 내 피부에 딱 맞는 맑은 생기를 연출할 수 있어요!"
      }
    ];

    /* ==========================================
       2. 상태 관리 (사용자 입력 값 저장)
       ========================================== */
    const userState = {
      personalColor: null, // spring, summer, fall, winter
      skinType: null,      // dry, oily, dehydrated_oily, combination, sensitive
      vibe: null,          // natural, lovely, shade, chic, glam
      finishSlider: 40,    // 0 ~ 100
      coverSlider: 3,      // 1 ~ 5
      myVanity: []         // 담은 화장품 객체 배열
    };

    /* 화면 전환 함수 */
    function goToScreen(screenId) {
      document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
      const target = document.getElementById(screenId);
      if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    /* 초기화 및 홈으로 이동 */
    function resetAllAndHome() {
      userState.personalColor = null;
      userState.skinType = null;
      userState.vibe = null;
      userState.finishSlider = 40;
      userState.coverSlider = 3;
      userState.myVanity = [];
      
      // UI 리셋
      document.querySelectorAll('.chip-btn').forEach(btn => btn.classList.remove('selected'));
      document.getElementById('finishSlider').value = 40;
      document.getElementById('coverSlider').value = 3;
      updateSliderLabels();
      renderVanityChips();
      renderSearchResults(COSMETICS_DATABASE.slice(0, 8));
      goToScreen('screen-home');
      showToast("처음으로 리셋되었어요! 새로운 메이크업을 찾아보세요 🐑");
    }

    /* 양 캐릭터 흔들흔들 애니메이션 */
    function sheepWiggle(id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.style.transform = "scale(1.15) rotate(-6deg)";
      setTimeout(() => {
        el.style.transform = "scale(1.15) rotate(6deg)";
      }, 150);
      setTimeout(() => {
        el.style.transform = "scale(1) rotate(0deg)";
      }, 300);
    }

    /* 토스트 알림창 띄우기 */
    let toastTimer = null;
    function showToast(message, icon = "🌸") {
      const toast = document.getElementById('toastNotice');
      const msgEl = document.getElementById('toastMessage');
      const iconEl = document.getElementById('toastIcon');
      
      if (!toast || !msgEl) return;
      msgEl.innerText = message;
      if (iconEl) iconEl.innerText = icon;
      
      toast.classList.add('show');
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 3200);
    }

    /* ==========================================
       3. 버튼 선택 이벤트 & 시각적 피드백
       ========================================== */
    function initChipButtons() {
      const chipGroups = ['group-personalColor', 'group-skinType', 'group-vibe'];
      
      chipGroups.forEach(groupId => {
        const groupEl = document.getElementById(groupId);
        if (!groupEl) return;
        
        groupEl.querySelectorAll('.chip-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const type = btn.getAttribute('data-type');
            const val = btn.getAttribute('data-value');
            
            // 그룹 내 다른 버튼 해제 및 현재 버튼 선택 (토글 지원)
            const wasSelected = btn.classList.contains('selected');
            groupEl.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('selected'));
            
            if (!wasSelected) {
              btn.classList.add('selected');
              userState[type] = val;
              const card = btn.closest('.section-card');
              if (card) card.classList.remove('highlight-missing');
            } else {
              userState[type] = null;
            }
          });
        });
      });
    }

    /* 슬라이더 라벨 업데이트 */
    function updateSliderLabels() {
      const finishVal = parseInt(document.getElementById('finishSlider').value, 10);
      const coverVal = parseInt(document.getElementById('coverSlider').value, 10);
      
      userState.finishSlider = finishVal;
      userState.coverSlider = coverVal;
      
      const finishLabel = document.getElementById('sliderFinishLabel');
      const finishDesc = document.getElementById('finishDescText');
      
      if (finishVal <= 25) {
        finishLabel.innerText = "뽀송 보송 (극매트 벨벳)";
        finishDesc.innerText = "유분을 강력하게 잡아주어 하루 종일 보송한 아기 피부결을 연출해요.";
      } else if (finishVal <= 60) {
        finishLabel.innerText = "자연스러운 세미매트";
        finishDesc.innerText = "속은 촉촉 겉은 끈적임 없이 매끄러운 가장 추천하는 황금 밸런스예요.";
      } else if (finishVal <= 80) {
        finishLabel.innerText = "은은한 새틴 수분광";
        finishDesc.innerText = "빛을 받을 때마다 투명하게 반짝이는 자연스러운 결광 피부를 완성해요.";
      } else {
        finishLabel.innerText = "촉촉 물광 (글로우 샤인)";
        finishDesc.innerText = "스킨케어를 듬뿍 바른 듯 수분감이 넘쳐흐르는 유리알 광채를 부여해요.";
      }

      const coverLabel = document.getElementById('sliderCoverLabel');
      const coverDesc = document.getElementById('coverDescText');
      
      if (coverVal <= 2) {
        coverLabel.innerText = "자연스러운 톤보정 (내추럴)";
        coverDesc.innerText = "원래 내 피부가 좋은 것처럼 얇고 투명한 시스루 커버를 제안해요.";
      } else if (coverVal <= 3) {
        coverLabel.innerText = "자연스러운 중간 커버 (데일리)";
        coverDesc.innerText = "모공과 붉은 기를 말끔하게 정돈해주는 가장 예쁜 데일리 커버예요.";
      } else {
        coverLabel.innerText = "완벽 무결점 하이 커버";
        coverDesc.innerText = "잡티 하나 보이지 않게 카메라 필터를 씌운 듯 완벽한 도자기 피부를 완성해요.";
      }
    }

    /* ==========================================
       4. 화장품 검색창 & 내 화장대 담기 로직
       ========================================== */
    function filterCosmeticSearch() {
      const keyword = document.getElementById('cosmeticSearchInput').value.trim().toLowerCase();
      if (!keyword) {
        renderSearchResults(COSMETICS_DATABASE.slice(0, 8));
        return;
      }
      
      const filtered = COSMETICS_DATABASE.filter(item => {
        return item.name.toLowerCase().includes(keyword) ||
               item.brand.toLowerCase().includes(keyword) ||
               item.category.toLowerCase().includes(keyword) ||
               item.features.some(f => f.toLowerCase().includes(keyword));
      });
      
      renderSearchResults(filtered);
    }

    function quickSearch(tag) {
      const input = document.getElementById('cosmeticSearchInput');
      input.value = tag;
      filterCosmeticSearch();
    }

    function renderSearchResults(items) {
      const container = document.getElementById('searchResultsContainer');
      if (!container) return;
      
      if (items.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 20px 0; color: var(--text-muted); font-size: 12.5px;">
            검색 결과가 없어요 😢 다른 이름으로 검색해보세요.
          </div>
        `;
        return;
      }

      container.innerHTML = items.map(prod => {
        const isAdded = userState.myVanity.some(v => v.id === prod.id);
        return `
          <div class="product-search-item">
            <img src="${prod.img}" alt="${prod.name}" class="product-thumb" onerror="this.onerror=null;this.src='${FALLBACK_BEAUTY_SVG}';">
            <div class="product-search-info">
              <div class="product-brand">${prod.brand}</div>
              <div class="product-title" title="${prod.name}">${prod.name}</div>
              <span class="product-tag">${prod.category}</span>
            </div>
            <button type="button" class="btn-add-item ${isAdded ? 'already-added' : ''}" onclick="toggleAddToVanity('${prod.id}')">
              <span>${isAdded ? '✓ 담김' : '+ 추가'}</span>
            </button>
          </div>
        `;
      }).join('');
    }

    function toggleAddToVanity(prodId) {
      const prod = COSMETICS_DATABASE.find(p => p.id === prodId);
      if (!prod) return;
      
      const existsIndex = userState.myVanity.findIndex(p => p.id === prodId);
      if (existsIndex >= 0) {
        // 이미 있으면 제거
        userState.myVanity.splice(existsIndex, 1);
        showToast(`${prod.brand} 제품을 화장대에서 뺐어요.`);
      } else {
        // 추가
        userState.myVanity.push(prod);
        showToast(`[${prod.brand}] 내 화장대에 추가되었어요! 💄`);
      }
      
      renderVanityChips();
      filterCosmeticSearch(); // 버튼 상태 갱신
    }

    function removeVanityItem(prodId) {
      userState.myVanity = userState.myVanity.filter(p => p.id !== prodId);
      renderVanityChips();
      filterCosmeticSearch();
      showToast("화장대에서 삭제했어요.");
    }

    function renderVanityChips() {
      const container = document.getElementById('vanityChipsContainer');
      const countText = document.getElementById('vanityCountText');
      if (!container) return;
      
      countText.innerText = `(${userState.myVanity.length}개)`;
      
      if (userState.myVanity.length === 0) {
        container.innerHTML = `
          <div class="my-vanity-empty" id="vanityEmptyMessage">
            아직 담긴 화장품이 없어요. 위에서 검색 후 추가해보세요! 🌸
          </div>
        `;
        return;
      }

      container.innerHTML = userState.myVanity.map(item => `
        <div class="vanity-chip">
          <span>💄 <strong>${item.brand}</strong> ${item.name.substring(0, 14)}...</span>
          <button type="button" class="btn-remove-chip" onclick="removeVanityItem('${item.id}')" title="삭제">×</button>
        </div>
      `).join('');
    }


    /* ==========================================
       5. 진단 처리 & UX 검증 (미입력 항목 안내)
       ========================================== */
    function processDiagnosis() {
      // UX 요구사항: "입력하지 않은 항목이 있다면 결과를 보여주지 말고 어떤 항목을 선택해야 하는지 알려줘."
      const missing = [];
      
      if (!userState.personalColor) {
        missing.push({ name: "퍼스널 컬러", id: "card-personalColor" });
      }
      if (!userState.skinType) {
        missing.push({ name: "피부 타입", id: "card-skinType" });
      }
      if (!userState.vibe) {
        missing.push({ name: "추구미 (워너비 분위기)", id: "card-vibe" });
      }

      if (missing.length > 0) {
        // 첫 번째 미입력 항목으로 부드럽게 스크롤 및 흔들림 강조 피드백
        const firstMissing = missing[0];
        const cardEl = document.getElementById(firstMissing.id);
        if (cardEl) {
          cardEl.classList.add('highlight-missing');
          cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        const missingNames = missing.map(m => m.name).join(', ');
        showToast(`아직 [${missingNames}]을(를) 선택하지 않았어요! 꼭 골라주세요 🐑`, "⚠️");
        return;
      }

      // 모든 필수 항목 충족 시: 부드러운 로딩 트랜지션
      const overlay = document.getElementById('loadingOverlay');
      overlay.classList.add('active');

      setTimeout(() => {
        generateDynamicResult();
        overlay.classList.remove('active');
        goToScreen('screen-result');
      }, 1050);
    }


    /* ==========================================
       6. 동적 결과 생성 알고리즘 (입력에 따라 완전히 달라짐)
       ========================================== */
    function generateDynamicResult() {
      const pc = userState.personalColor;
      const st = userState.skinType;
      const vibe = userState.vibe;
      const finish = userState.finishSlider;
      const cover = userState.coverSlider;

      // 한글 명칭 매핑
      const pcLabels = {
        spring: "봄 웜톤 (Spring Warm) 🌸",
        summer: "여름 쿨톤 (Summer Cool) 🌊",
        fall: "가을 웜톤 (Autumn Warm) 🍂",
        winter: "겨울 쿨톤 (Winter Cool) ❄️"
      };
      const stLabels = {
        dry: "건성 피부 🌵",
        oily: "지성 피부 ✨",
        dehydrated_oily: "수부지 피부 💦",
        combination: "복합성 피부 🌓",
        sensitive: "민감성 피부 🍃"
      };
      const vibeLabels = {
        natural: "맑은 꾸안꾸 내추럴 🌿",
        lovely: "청순 러블리 과즙 🍑",
        shade: "그윽한 분위기 음영 ☕",
        chic: "세련된 칠 & 시크 힙 🕶️",
        glam: "반짝 화려 글램 ✨"
      };

      // 1) 상단 뱃지 표시
      const badgeContainer = document.getElementById('resultSelectedBadges');
      badgeContainer.innerHTML = `
        <span class="res-badge">${pcLabels[pc]}</span>
        <span class="res-badge blue">${stLabels[st]}</span>
        <span class="res-badge orange">${vibeLabels[vibe]}</span>
        <span class="res-badge" style="background: #F4EFEB; color: #4A4D55; border-color: #E2DAD2;">
          피니쉬: ${finish <= 40 ? '보송 세미매트' : (finish <= 70 ? '자연 결광' : '촉촉 물광')}
        </span>
      `;

      // 2) 몽실이의 다정한 캐릭터 멘트 생성
      const sheepTitle = document.getElementById('resultSheepTitle');
      const sheepComment = document.getElementById('resultSheepComment');
      
      sheepTitle.innerText = `몽실이의 ${pcLabels[pc].split(' ')[0]} 맞춤 처방 💌`;
      
      let personalizedComment = "";
      if (pc === 'spring') {
        personalizedComment = `따스하고 싱그러운 봄 햇살 같은 당신! ${stLabels[st]}의 유수분 밸런스를 맞춰주면서, 화사한 피치 코랄 컬러를 얹어 본연의 생기를 가장 극대화하는 맞춤 루틴을 준비했어요 🍑`;
      } else if (pc === 'summer') {
        personalizedComment = `맑고 청초한 바다 안개 같은 당신! 붉은 기를 차분하게 가라앉히고, 딸기 우유빛 모브 핑크로 투명하고 맑은 피부 톤을 깨끗하게 살려드릴게요 🌊`;
      } else if (pc === 'fall') {
        personalizedComment = `깊이 있고 고급스러운 가을 감성을 품은 당신! ${stLabels[st]}에 맞게 결을 정돈하고, 부드러운 카라멜 브릭 음영으로 우아한 아우라를 완성해드릴게요 🍂`;
      } else {
        personalizedComment = `도회적이고 선명한 카리스마를 지닌 당신! 피부 결점을 군더더기 없이 정돈하고, 맑은 루비 체리 포인트로 형광등을 켠 듯한 쿨톤 대비를 살려드릴게요 ❄️`;
      }
      sheepComment.innerText = personalizedComment;

      // 3) 꼭 고려해야 하는 조건 (Checkpoints)
      const conditionList = document.getElementById('resultConditionsList');
      const conditions = [];

      // 피부 타입별 조건
      if (st === 'dry') {
        conditions.push("메이크업 전 수분 앰플과 크림을 얇게 2회 레이어링하여 각질 들뜸을 사전에 차단하세요.");
        conditions.push("파우더는 피지 분비가 있는 눈썹과 코 옆에만 아주 작은 브러쉬로 가볍게 터치하세요.");
      } else if (st === 'oily') {
        conditions.push("기초 케어 시 유분감이 많은 크림은 피하고, 수분 젤 타입으로 끈적임 없이 흡수시켜야 화장이 밀리지 않아요.");
        conditions.push("T존과 모공 부위에 모공 프라이머를 소량 굴려 바른 후 픽서를 베이스 전후로 뿌려 고정력을 높이세요.");
      } else if (st === 'dehydrated_oily') {
        conditions.push("속은 당기고 겉은 번들거리므로, 속보습 토너를 3번 흡수시킨 후 오일프리 보습제로 유분막만 살짝 씌워주세요.");
        conditions.push("너무 매트한 쿠션을 바르면 속건조로 각질이 뜰 수 있으니 '세미매트' 제형을 얇게 톡톡 두드리는 것이 핵심입니다.");
      } else if (st === 'combination') {
        conditions.push("T존(이마, 코)은 소량의 노세범 파우더로 유분을 잡고, 볼과 U존은 촉촉한 쿠션감을 유지하는 영역별 맞춤 테크닉이 필요합니다.");
      } else {
        conditions.push("피부 장벽이 얇고 붉어지기 쉬우므로 스펀지를 세게 두드리지 말고, 부드러운 퍼프로 가볍게 밀착시키세요.");
        conditions.push("향료나 자극 성분이 배제된 저자극 비건 인증 포뮬러 화장품을 우선적으로 사용해야 트러블을 예방할 수 있습니다.");
      }

      // 퍼스널 컬러별 주의 조건
      if (pc === 'spring') {
        conditions.push("탁하고 어두운 회색기(그레이시) 섀도우는 얼굴을 칙칙하게 만드니, 맑고 노란기 도는 피치/아이보리 계열을 고수하세요.");
      } else if (pc === 'summer') {
        conditions.push("노란기 가득한 오렌지나 브라운 립은 쿨톤 특유의 맑은 안색을 해치므로, 꼭 핑크 베이스 립을 선택하세요.");
      } else if (pc === 'fall') {
        conditions.push("너무 푸른빛이 도는 핫핑크나 흰기 섞인 파스텔은 붕 뜰 수 있으니, 톤 다운된 뮤트 브라운과 브릭 코랄을 활용하세요.");
      } else {
        conditions.push("어정쩡한 중간 톤보다는 확실한 명도 대비(깨끗한 무결점 베이스 + 또렷한 포인트 립)를 줄 때 이목구비가 훨씬 또렷해 보입니다.");
      }

      conditionList.innerHTML = conditions.map(c => `<li class="condition-item">${c}</li>`).join('');

      // 4) 추천한 이유 (Why Recommended)
      const reasonPara = document.getElementById('resultReasonParagraph');
      let reasonText = `이번 처방은 고객님의 <strong>${stLabels[st]}</strong> 특성에 맞추어 유수분 밸런스가 흐트러지지 않도록 처방되었습니다. `;
      
      if (finish <= 40) {
        reasonText += `선택하신 '보송한 세미매트' 선호도를 반영하여, 시간이 지나도 번들거림 없이 피지를 흡착해주는 초밀착 피니쉬 제품을 매칭했습니다. `;
      } else {
        reasonText += `선택하신 '맑은 결광' 선호도에 맞추어, 속건조를 유발하지 않으면서 빛을 자연스럽게 굴절시키는 에센스 함유 제품을 배치했습니다. `;
      }
      
      reasonText += `또한 <strong>${pcLabels[pc]}</strong>의 고유한 톤 온도를 극대화할 수 있도록 채도와 명도를 정밀 조율했으며, <strong>${vibeLabels[vibe]}</strong>의 무드를 부드럽게 표현할 수 있는 단계별 메이크업 조화에 집중했습니다.`;
      reasonPara.innerHTML = reasonText;

      // 5) 추천 화장품 4개 선별 (카테고리별: 베이스, 립, 아이, 치크)
      const selectedProducts = pickRecommendedProducts(pc, st, vibe, finish);
      renderRecommendedProducts(selectedProducts);

      // 6) 추천 화장법 단계별 가이드 렌더링
      renderTutorialSteps(pc, st, vibe, finish, cover);

      // 7) 내 화장대 연계 조합 시너지 분석
      renderVanitySynergy(selectedProducts);
    }

    /* 최적 화장품 선별 알고리즘 */
    function pickRecommendedProducts(pc, st, vibe, finishVal) {
      const picks = [];

      // 1. 베이스 선정
      const basePool = COSMETICS_DATABASE.filter(p => p.categoryKey === 'base');
      let bestBase = basePool.find(p => p.skinType.includes(st) && (finishVal <= 50 ? p.finish !== 'glow' : p.finish === 'glow'));
      if (!bestBase) bestBase = basePool[0];
      picks.push(bestBase);

      // 2. 립 선정
      const lipPool = COSMETICS_DATABASE.filter(p => p.categoryKey === 'lip');
      let bestLip = lipPool.find(p => (p.personalColor.includes(pc) || p.personalColor.includes('all')) && (p.vibe.includes(vibe) || p.vibe.includes('all')));
      if (!bestLip) bestLip = lipPool.find(p => p.personalColor.includes(pc)) || lipPool[0];
      picks.push(bestLip);

      // 3. 아이섀도우 선정
      const eyePool = COSMETICS_DATABASE.filter(p => p.categoryKey === 'eye');
      let bestEye = eyePool.find(p => (p.personalColor.includes(pc) || p.personalColor.includes('all')) && (p.vibe.includes(vibe) || p.vibe.includes('all')));
      if (!bestEye) bestEye = eyePool.find(p => p.personalColor.includes(pc)) || eyePool[0];
      picks.push(bestEye);

      // 4. 치크/블러셔 선정
      const cheekPool = COSMETICS_DATABASE.filter(p => p.categoryKey === 'cheek');
      let bestCheek = cheekPool.find(p => (p.personalColor.includes(pc) || p.personalColor.includes('all')));
      if (!bestCheek) bestCheek = cheekPool[0];
      picks.push(bestCheek);

      return picks;
    }

    /* 추천 화장품 카드 렌더링 (큰 예시 사진!) */
    function renderRecommendedProducts(products) {
      const container = document.getElementById('recommendedProductsContainer');
      container.innerHTML = products.map((prod) => `
        <div class="product-showcase-card">
          <div class="big-product-img-wrapper">
            <span class="category-floating-badge">${prod.category} 추천</span>
            <span class="match-rate-badge">찰떡 적합도 99%</span>
            <img src="${prod.img}" alt="${prod.name}" class="big-product-img" onerror="this.onerror=null;this.src='${FALLBACK_BEAUTY_SVG}';">
          </div>
          <div class="product-card-body">
            <div class="prod-brand-name">${prod.brand}</div>
            <div class="prod-full-name">${prod.name}</div>
            <div class="prod-sheep-comment">
              <strong>🐑 몽실이의 픽 이유:</strong> ${prod.sheepComment}
            </div>
            <p style="font-size: 12.5px; color: var(--text-sub); line-height: 1.45; margin-bottom: 8px;">
              ${prod.desc}
            </p>
            <div class="prod-features-row">
              ${prod.features.map(f => `<span class="feature-tag">#${f}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('');
    }

    /* 단계별 맞춤 화장법 가이드 렌더링 */
    function renderTutorialSteps(pc, st, vibe, finish, cover) {
      const container = document.getElementById('tutorialStepsContainer');
      
      const steps = [
        {
          num: 1,
          title: "스킨케어 & 프라이밍 밀착 베이스",
          desc: st === 'dry' 
            ? "수분 토너를 2회 레이어링한 후 묽은 크림을 손바닥 체온으로 녹여 밀착시킵니다. 각질이 잘 뜨는 콧망울과 볼 안쪽에 집중하세요."
            : "오일프리 수분 젤을 가볍게 두드려 흡수시키고, T존 부위에 모공 프라이머를 소량 굴려 유분을 미연에 잠재웁니다.",
          tip: "💡 몽실이 팁: 기초 후 2분간 기다려 흡수시킨 뒤 메이크업을 시작해야 밀림 현상이 전혀 없어요!"
        },
        {
          num: 2,
          title: "파운데이션 & 쿠션 균일 도포",
          desc: finish <= 40
            ? "쿠션 퍼프에 내용물을 찍은 후 뚜껑 안쪽에서 양 조절을 덜어내고, 얼굴 안쪽에서 바깥쪽으로 얇게 톡톡 펴 바릅니다."
            : "물에 적셔 꽉 짠 하이드로 스펀지로 쿠션을 가볍게 두드려주면 맑은 유리알 결광이 더욱 투명하게 피어납니다.",
          tip: `💡 몽실이 팁: 고객님이 선택하신 커버 강도(${cover}단계)에 맞춰 고민 부위에만 얇게 한 번 더 레이어링하세요.`
        },
        {
          num: 3,
          title: "아이섀도우 & 브로우 음영 연출",
          desc: pc === 'summer' || pc === 'winter'
            ? "노란기가 없는 쿨 애쉬 모브 베이스를 눈두덩이에 넓게 펴 바르고, 쌍꺼풀 라인에 딥 모브를 더해 맑고 시원한 눈매를 만듭니다."
            : "따뜻한 살구 피치 또는 누드 베이지를 베이스로 깔고, 눈꼬리 삼각존에 은은한 브라운 음영을 넣어 깊이감을 줍니다.",
          tip: "💡 몽실이 팁: 애교살 중앙에 미세 글리터를 콕 찍어주면 눈동자가 두 배로 맑고 초롱초롱해 보여요!"
        },
        {
          num: 4,
          title: "수채화 치크 & 그라데이션 립",
          desc: pc === 'spring'
            ? "복숭아빛 코랄 블러셔를 볼 중앙에 둥글게 굴려 바르고, 입술 안쪽부터 코랄 틴트를 펴 발라 생기 넘치는 과즙립을 완성합니다."
            : pc === 'summer'
            ? "라벤더 핑크 블러셔를 눈 밑에서 관자놀이 방향으로 사선 터치하고, 맑은 모브 핑크 립을 얹어 청초한 무드를 완성합니다."
            : pc === 'fall'
            ? "누드 베이지 치크를 광대뼈 라인에 감싸듯 얹고, 톤다운 브릭 립으로 우아하고 그윽한 가을 분위기를 연출합니다."
            : "맑은 핑크 블러셔로 볼을 가볍게 밝히고, 딥한 체리 레드 립으로 확실한 포인트를 주어 카리스마를 극대화합니다.",
          tip: "💡 몽실이 팁: 립밤을 살짝 바른 뒤 틴트를 얹으면 건조함 없이 도톰한 탕후루 립이 오래 유지돼요."
        },
        {
          num: 5,
          title: "메이크업 픽싱 & 롱래스팅 피니쉬",
          desc: "메이크업 픽서를 얼굴에서 20cm 거리를 두고 X자와 T자로 가볍게 분사하여 파우더와 파운데이션을 하나로 밀착시킵니다.",
          tip: "💡 몽실이 팁: 절대 손으로 두드리지 말고 자연 바람으로 말려야 코팅막이 매끈하게 형성됩니다!"
        }
      ];

      container.innerHTML = steps.map(s => `
        <div class="tutorial-step-card">
          <div class="step-number-circle">${s.num}</div>
          <div class="step-info">
            <div class="step-header-text">${s.title}</div>
            <div class="step-body-desc">${s.desc}</div>
            <div class="step-pro-tip">${s.tip}</div>
          </div>
        </div>
      `).join('');
    }

    /* 내 화장대 연계 조합 시너지 렌더링 */
    function renderVanitySynergy(recommendedProducts) {
      const header = document.getElementById('vanitySynergyHeader');
      const content = document.getElementById('vanitySynergyContent');

      if (userState.myVanity.length === 0) {
        header.innerText = "내 화장대 제품과의 믹스 꿀조합";
        content.innerHTML = `
          현재 담긴 개인 화장품이 없어요! 이전 화면의 <strong>'내 화장대 찾기'</strong>에서 평소 쓰시던 쿠션이나 틴트를 검색해 담으시면, 이번 추천 템과 어떻게 섞어 바르면 최상인지 1:1 조합 레시피를 알려드려요 💄
        `;
        return;
      }

      const vanityNames = userState.myVanity.map(v => `<strong>[${v.brand}] ${v.name}</strong>`).join(', ');
      const recBase = recommendedProducts.find(p => p.categoryKey === 'base');
      const recLip = recommendedProducts.find(p => p.categoryKey === 'lip');

      header.innerText = `담으신 화장품 (${userState.myVanity.length}종) 맞춤 활용 꿀팁 🪄`;
      content.innerHTML = `
        사용자님의 화장대에 있는 ${vanityNames}과(와) 함께 쓰면 시너지가 폭발해요!<br><br>
        • <strong>베이스 시너지:</strong> 보유하신 제품과 추천받은 <em>${recBase ? recBase.name : '추천 베이스'}</em>을 1:1 비율로 믹스하면 피부 당김 없이 완벽한 밀착 지속력을 얻을 수 있습니다.<br>
        • <strong>립 레이어링:</strong> 가지고 계신 립을 베이스로 얇게 바른 뒤, 추천 립인 <em>${recLip ? recLip.name : '추천 틴트'}</em>을 입술 안쪽에만 톡톡 얹어 음파음파 해주시면 자연스러운 입체 볼륨 그라데이션이 완성됩니다!
      `;
    }

    /* 결과 복사 및 공유 */
    function shareOrCopyResult() {
      const text = `[포근양의 맞춤 뷰티 처방전]\n` +
                   `• 나의 톤: ${userState.personalColor} / ${userState.skinType} / ${userState.vibe}\n` +
                   `• 몽실이의 인생 추천 화장품과 메이크업 테크닉 처방이 완료되었습니다!\n` +
                   `지금 나만의 맞춤 메이크업을 확인해보세요 🐑🌸`;
                   
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast("처방전 요약이 클립보드에 복사되었어요! 친구에게 공유해보세요 📋✨");
        }).catch(() => {
          showToast("처방전이 완성되었습니다! 캡처해서 보관해보세요 📸");
        });
      } else {
        showToast("처방전이 완성되었습니다! 캡처해서 보관해보세요 📸");
      }
    }


    /* ==========================================
       7. 초기화 실행
       ========================================== */
    window.addEventListener('DOMContentLoaded', () => {
      initChipButtons();
      updateSliderLabels();
      renderSearchResults(COSMETICS_DATABASE.slice(0, 8));
      renderVanityChips();
    });
