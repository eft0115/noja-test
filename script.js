// 따라하기 운동 프로그램 전체 데이터
const allPrograms = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
        title: '목 스트레칭 - 거북목 개선',
        duration: '5분',
        difficulty: '초급',
        views: '12.5K',
        rating: 4.9,
        popular: true,
        category: '목/어깨'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500',
        title: '어깨 회전 운동 - 오십견 예방',
        duration: '8분',
        difficulty: '초급',
        views: '10.2K',
        rating: 4.8,
        popular: true,
        category: '목/어깨'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1598662957477-24319d5aa2c8?w=500',
        title: '허리 강화 운동 - 요통 완화',
        duration: '10분',
        difficulty: '중급',
        views: '15.8K',
        rating: 5.0,
        popular: true,
        category: '허리'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500',
        title: '무릎 강화 운동 - 관절 보호',
        duration: '12분',
        difficulty: '중급',
        views: '9.7K',
        rating: 4.7,
        popular: false,
        category: '무릎'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500',
        title: '골반 교정 운동 - 체형 개선',
        duration: '15분',
        difficulty: '중급',
        views: '18.3K',
        rating: 4.95,
        popular: true,
        category: '골반'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500',
        title: '발목 유연성 운동',
        duration: '6분',
        difficulty: '초급',
        views: '7.2K',
        rating: 4.6,
        popular: false,
        category: '발목'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=500',
        title: '코어 근력 운동 - 복부 강화',
        duration: '20분',
        difficulty: '고급',
        views: '22.1K',
        rating: 5.0,
        popular: true,
        category: '코어'
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500',
        title: '전신 스트레칭 - 유연성 향상',
        duration: '10분',
        difficulty: '초급',
        views: '25.6K',
        rating: 4.85,
        popular: true,
        category: '전신'
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
        title: '상체 근력 운동',
        duration: '18분',
        difficulty: '중급',
        views: '11.4K',
        rating: 4.75,
        popular: false,
        category: '상체'
    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500',
        title: '하체 근력 운동',
        duration: '16분',
        difficulty: '중급',
        views: '13.2K',
        rating: 4.8,
        popular: false,
        category: '하체'
    },
    {
        id: 11,
        image: 'https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=500',
        title: '척추 교정 운동 - 측만증 개선',
        duration: '14분',
        difficulty: '중급',
        views: '16.8K',
        rating: 4.9,
        popular: true,
        category: '척추'
    },
    {
        id: 12,
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500',
        title: '손목 터널 증후군 예방 운동',
        duration: '7분',
        difficulty: '초급',
        views: '8.5K',
        rating: 4.7,
        popular: false,
        category: '손목'
    },
    {
        id: 13,
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500',
        title: '균형감각 훈련',
        duration: '12분',
        difficulty: '중급',
        views: '10.9K',
        rating: 4.65,
        popular: false,
        category: '전신'
    },
    {
        id: 14,
        image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=500',
        title: '승모근 이완 운동 - 뭉친 어깨',
        duration: '9분',
        difficulty: '초급',
        views: '19.7K',
        rating: 4.95,
        popular: true,
        category: '목/어깨'
    },
    {
        id: 15,
        image: 'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?w=500',
        title: '허벅지 스트레칭',
        duration: '11분',
        difficulty: '초급',
        views: '14.3K',
        rating: 4.8,
        popular: false,
        category: '하체'
    },
    {
        id: 16,
        image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500',
        title: '팔 근력 강화 운동',
        duration: '13분',
        difficulty: '중급',
        views: '9.1K',
        rating: 4.7,
        popular: false,
        category: '상체'
    },
    {
        id: 17,
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500',
        title: '복부 다이어트 운동',
        duration: '15분',
        difficulty: '중급',
        views: '28.4K',
        rating: 4.9,
        popular: true,
        category: '코어'
    },
    {
        id: 18,
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500',
        title: '등 근육 강화 운동',
        duration: '17분',
        difficulty: '고급',
        views: '12.6K',
        rating: 4.85,
        popular: false,
        category: '상체'
    },
    {
        id: 19,
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500',
        title: '종아리 스트레칭',
        duration: '8분',
        difficulty: '초급',
        views: '11.2K',
        rating: 4.75,
        popular: false,
        category: '하체'
    },
    {
        id: 20,
        image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=500',
        title: '전신 재활 운동 - 회복기',
        duration: '25분',
        difficulty: '고급',
        views: '15.9K',
        rating: 5.0,
        popular: true,
        category: '전신'
    }
];

// 무한 스크롤 변수
let currentPage = 0;
const ITEMS_PER_PAGE = 8; // 8개로 변경
let isLoading = false;
let totalLoadedPrograms = 0; // 총 로드된 프로그램 수
let observer = null; // IntersectionObserver 인스턴스

// 즐겨찾기
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// 난이도별 색상
const difficultyColors = {
    '초급': '#10b981',
    '중급': '#f59e0b',
    '고급': '#ef4444'
};

// 카드 생성 함수
function createProgramCard(program, uniqueId) {
    const isFavorite = favorites.includes(uniqueId);
    const difficultyColor = difficultyColors[program.difficulty] || '#6b7280';
    
    return `
        <div class="listing-card" data-id="${uniqueId}">
            <div class="listing-image-container">
                <img src="${program.image}" alt="${program.title}" class="listing-image" loading="lazy">
                ${program.popular ? `
                    <div class="guest-favorite-badge">
                        🔥 인기
                    </div>
                ` : ''}
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${uniqueId}">
                    <svg width="24" height="24" viewBox="0 0 32 32">
                        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 00-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 00-9.9 0A6.98 6.98 0 002 11c0 7 7 12.27 14 17z"></path>
                    </svg>
                </button>
                <div class="program-badges">
                    <span class="badge-difficulty" style="background-color: ${difficultyColor}">${program.difficulty}</span>
                    <span class="badge-duration">⏱ ${program.duration}</span>
                </div>
            </div>
            <div class="listing-info">
                <div class="listing-header">
                    <div>
                        <div class="listing-title">${program.title}</div>
                        <div class="listing-dates">
                            <span class="category-tag">${program.category}</span>
                            <span class="views">👁 ${program.views} 조회</span>
                        </div>
                    </div>
                    <div class="listing-rating">
                        <svg viewBox="0 0 32 32">
                            <path fill="currentColor" d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 00-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 001.483 1.061L16 25.951l8.625 4.997a1 1 0 001.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 00-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 00-1.814 0z"></path>
                        </svg>
                        ${program.rating}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 프로그램 로드 (무한 반복)
function loadPrograms() {
    if (isLoading) {
        console.log('⏸ Already loading...');
        return;
    }
    
    console.log('📥 Starting to load programs...');
    isLoading = true;
    
    const indicator = document.getElementById('loadingIndicator');
    indicator.classList.add('active');
    
    // 실제 로딩 시뮬레이션
    setTimeout(() => {
        const container = document.getElementById('programList');
        
        // ITEMS_PER_PAGE 만큼 로드 (20개 프로그램을 계속 반복)
        for (let i = 0; i < ITEMS_PER_PAGE; i++) {
            const programIndex = totalLoadedPrograms % allPrograms.length; // 20개를 반복
            const program = allPrograms[programIndex];
            const uniqueId = `program-${totalLoadedPrograms}`; // 고유 ID 생성
            
            container.insertAdjacentHTML('beforeend', createProgramCard(program, uniqueId));
            totalLoadedPrograms++;
        }
        
        currentPage++;
        
        // 로딩 완료
        indicator.classList.remove('active');
        isLoading = false;
        
        // 이벤트 리스너 재설정
        attachEventListeners();
        
        console.log(`✅ Page ${currentPage} loaded! Total: ${totalLoadedPrograms} programs`);
        console.log(`🔓 isLoading is now FALSE - ready for next load`);
        
    }, 400); // 0.4초 로딩
}

// 이벤트 리스너
function attachEventListeners() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        if (!btn.hasAttribute('data-attached')) {
            btn.setAttribute('data-attached', 'true');
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                if (favorites.includes(id)) {
                    favorites = favorites.filter(f => f !== id);
                    btn.classList.remove('active');
                } else {
                    favorites.push(id);
                    btn.classList.add('active');
                }
                localStorage.setItem('favorites', JSON.stringify(favorites));
            });
        }
    });
    
    document.querySelectorAll('.listing-card').forEach(card => {
        if (!card.hasAttribute('data-attached')) {
            card.setAttribute('data-attached', 'true');
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.favorite-btn')) {
                    const uniqueId = card.dataset.id;
                    const programIndex = parseInt(uniqueId.split('-')[1]) % allPrograms.length;
                    const program = allPrograms[programIndex];
                    alert(`📹 ${program.title}\n\n⏱ 시간: ${program.duration}\n🎯 난이도: ${program.difficulty}\n📂 카테고리: ${program.category}\n⭐ 평점: ${program.rating}\n👁 조회수: ${program.views}\n\n실제 사이트에서는 운동 영상이 재생됩니다.`);
                }
            });
        }
    });
}

// IntersectionObserver로 무한 스크롤 감지
function setupInfiniteScroll() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    
    if (!loadingIndicator) {
        console.error('❌ Loading indicator not found!');
        return;
    }
    
    // 기존 observer가 있으면 정리
    if (observer) {
        observer.disconnect();
    }
    
    console.log('🔧 Setting up IntersectionObserver...');
    
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(`👁 Intersection detected: ${entry.isIntersecting}, isLoading: ${isLoading}`);
            
            // 로딩 인디케이터가 화면에 보이고, 현재 로딩 중이 아닐 때 로드
            if (entry.isIntersecting && !isLoading) {
                console.log('✅ Triggering loadPrograms()');
                loadPrograms();
            }
        });
    }, {
        root: null, // viewport 기준
        rootMargin: '400px', // 화면 하단 400px 전에 미리 로드
        threshold: 0.01 // 1% 보이면 트리거
    });
    
    observer.observe(loadingIndicator);
    console.log('✅ IntersectionObserver is now active and watching!');
}

// 예약 기능
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.search-item input');
        const name = inputs[0].value;
        const phone = inputs[1].value;
        const date = inputs[2].value;
        const treatment = inputs[3].value;
        
        if (name && phone && date) {
            alert(`✅ 예약이 접수되었습니다!\n\n이름: ${name}\n연락처: ${phone}\n희망날짜: ${date}\n치료종류: ${treatment || '상담 후 결정'}\n\n곧 연락드리겠습니다.`);
        } else {
            alert('⚠️ 이름, 연락처, 희망 날짜를 모두 입력해주세요.');
        }
    });
}

// 헤더 그림자
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 1px 0 rgba(0,0,0,0.08)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// 메뉴 버튼
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        alert('📋 메뉴:\n- 클리닉 소개\n- 이용 안내\n- 오시는 길\n- 자주 묻는 질문');
    });
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    console.log('═══════════════════════════════════════');
    console.log('🚀 Page loaded!');
    console.log('♾️ Infinite scroll with IntersectionObserver');
    console.log('📊 Starting with 8 items per load');
    console.log('═══════════════════════════════════════');
    
    // 끝 메시지 숨기기 (무한 스크롤이므로 필요 없음)
    const endMessage = document.getElementById('endMessage');
    if (endMessage) {
        endMessage.style.display = 'none';
    }
    
    // 첫 페이지 로드
    loadPrograms();
    
    // 첫 로드 완료 후 IntersectionObserver 설정
    setTimeout(() => {
        console.log('⏰ Now setting up IntersectionObserver...');
        setupInfiniteScroll();
    }, 600);
});
