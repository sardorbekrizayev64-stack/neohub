/* ===================================
   SEARCH.JS - УМНЫЙ ПОИСК ПРЕДМЕТОВ
   =================================== */

// Обработка ввода в поле поиска
function handleSearchInput(input) {
    const query = input.value.trim().toLowerCase();
    const suggestions = document.getElementById('searchSuggestions');
    
    if(query.length === 0) {
        suggestions.classList.remove('active');
        return;
    }

    const results = [];
    
    // Ищем в названиях предметов
    Object.entries(subjectsContent).forEach(([key, subject]) => {
        const subjectName = subject.title.toLowerCase();
        const keywords = subject.keywords || [];
        
        if(subjectName.includes(query) || keywords.some(k => k.toLowerCase().includes(query))) {
            results.push({key, title: subject.title, type: 'subject'});
        }
    });
    
    // Ищем в словаре синонимов
    Object.entries(searchDictionary).forEach(([synonym, subjects]) => {
        if(synonym.includes(query)) {
            subjects.forEach(subjectName => {
                const subjectKey = Object.keys(subjectsContent).find(k => 
                    subjectsContent[k].title.toLowerCase() === subjectName.toLowerCase()
                );
                if(subjectKey && !results.find(r => r.key === subjectKey)) {
                    results.push({key: subjectKey, title: subjectsContent[subjectKey].title, type: 'subject'});
                }
            });
        }
    });

    // Показываем предложения
    if(results.length > 0) {
        suggestions.innerHTML = results.map(r => `
            <div class="suggestion-item" onclick="selectSuggestion('${r.key}')">
                <i class="fas fa-search"></i>
                <span>${r.title}</span>
            </div>
        `).join('');
        suggestions.classList.add('active');
    } else {
        suggestions.classList.remove('active');
    }
}

// Обработка нажатия клавиш в поле поиска
function handleSearchKey(event) {
    if(event.key === 'Enter') {
        const query = event.target.value.trim().toLowerCase();
        const suggestions = document.getElementById('searchSuggestions');
        
        if(suggestions.classList.contains('active') && suggestions.children.length > 0) {
            // Если есть предложения, выбираем первое
            suggestions.children[0].click();
        } else {
            // Иначе ищем по точному совпадению
            performSearch(query);
        }
    } else if(event.key === 'Escape') {
        document.getElementById('searchSuggestions').classList.remove('active');
    }
}

// Выбор предложения из списка
function selectSuggestion(subjectKey) {
    openSubject(subjectKey);
    document.getElementById('subjectSearchInput').value = '';
    document.getElementById('searchSuggestions').classList.remove('active');
}

// Выполнение поиска
function performSearch(query) {
    const allCards = document.querySelectorAll('.subject-card');
    let found = false;
    const foundSubjects = [];

    // Ищем по названию
    allCards.forEach(card => {
        const subjectName = card.getAttribute('data-subject');
        if(subjectName.includes(query)) {
            foundSubjects.push(card);
            found = true;
        }
    });

    // Ищем по словарю синонимов
    if(searchDictionary[query]) {
        searchDictionary[query].forEach(suggestedSubject => {
            allCards.forEach(card => {
                if(card.getAttribute('data-subject') === suggestedSubject) {
                    foundSubjects.push(card);
                    found = true;
                }
            });
        });
    }

    // Если нашли одно совпадение, открываем его
    if(foundSubjects.length === 1) {
        foundSubjects[0].click();
    } else if(foundSubjects.length > 1) {
        // Если нашли несколько, показываем подсказки
        const suggestions = document.getElementById('searchSuggestions');
        suggestions.innerHTML = foundSubjects.map(card => {
            const subjectKey = Object.keys(subjectsContent).find(k => 
                subjectsContent[k].title.toLowerCase() === card.getAttribute('data-subject').toLowerCase()
            );
            return `
                <div class="suggestion-item" onclick="selectSuggestion('${subjectKey}')">
                    <i class="fas fa-search"></i>
                    <span>${subjectsContent[subjectKey].title}</span>
                </div>
            `;
        }).join('');
        suggestions.classList.add('active');
    } else if(!found && query !== '') {
        showSearchModal();
    }
}

// Показать модальное окно "Предмет не найден"
function showSearchModal() {
    document.getElementById('modalOverlay').classList.add('show');
    document.getElementById('searchModal').classList.add('show');
}

// Закрыть модальное окно поиска
function closeSearchModal() {
    document.getElementById('modalOverlay').classList.remove('show');
    document.getElementById('searchModal').classList.remove('show');
}

// Закрытие предложений при клике вне поля поиска
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        const searchContainer = document.querySelector('.search-container');
        if(searchContainer && !searchContainer.contains(e.target)) {
            document.getElementById('searchSuggestions').classList.remove('active');
        }
    });
});