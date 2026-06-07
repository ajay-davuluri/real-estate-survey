    const answers = {};
    let currentQuestion = 0; // 0 = welcome
    const totalQuestions = 40;

    const questions = [
        // Q0: Welcome
        { id: 'welcome', type: 'welcome', section: null },
        // SECTION 2: Your Current Property Search Context
        { id: 'q1', type: 'single', section: 'Section 2: Your Current Property Search Context', sectionIntro: null,
          title: 'Are you currently searching for a property?',
          options: ['Yes, actively searching', 'Planning to start within 3 months', 'Planning to start within 12 months', 'Not currently searching'] },
        { id: 'q2', type: 'multiple', section: 'Section 2: Your Current Property Search Context',
          title: 'What type of property are you looking for?',
          hint: 'Select all that apply',
          options: ['Apartment', 'Villa', 'Independent House', 'Plot', 'Commercial Property', 'Investment Property', 'Other'] },
        { id: 'q3', type: 'single', section: 'Section 2: Your Current Property Search Context',
          title: 'What is the primary purpose of your property search?',
          options: ['Primary Residence', 'Investment', 'Rental Income', 'Vacation Home', 'Business Use', 'Other'] },
        { id: 'q4', type: 'text', section: 'Section 2: Your Current Property Search Context',
          title: 'Which city/area are you searching in?',
          placeholder: 'e.g., Hyderabad, Bangalore, Mumbai...' },
        { id: 'q5', type: 'single', section: 'Section 2: Your Current Property Search Context',
          title: 'What is your budget range?',
          options: ['Under ₹25 Lakhs', '₹25-50 Lakhs', '₹50 Lakhs - 1 Crore', '₹1-2 Crore', '₹2-5 Crore', '₹5-10 Crore', '₹10+ Crore'] },
        { id: 'q6', type: 'rating', section: 'Section 2: Your Current Property Search Context',
          title: 'How confident are you in finding the right property within your budget?',
          labelLow: 'Not confident', labelHigh: 'Very confident' },
        { id: 'q7', type: 'text', section: 'Section 2: Your Current Property Search Context',
          title: 'What worries you most about finding a property?',
          placeholder: 'What worries you most about finding a property?' },
        // SECTION 3: Recent Search Experience
        { id: 'q8', type: 'numeric', section: 'Section 3: Recent Search Experience', sectionIntro: '🏠 Now let\'s talk about your recent search experience...',
          title: 'How many properties have you physically visited so far?',
          placeholder: 'Number of properties visited' },
        { id: 'q9', type: 'single', section: 'Section 3: Recent Search Experience',
          title: 'How long have you been actively searching?',
          options: ['Less than 2 weeks', '2-4 weeks', '1-3 months', '3-6 months', 'More than 6 months'] },
        { id: 'q10', type: 'numeric', section: 'Section 3: Recent Search Experience',
          title: 'How many brokers/agents have you spoken with?',
          placeholder: 'Number of brokers/agents' },
        { id: 'q11', type: 'numeric', section: 'Section 3: Recent Search Experience',
          title: 'How many properties did you shortlist?',
          placeholder: 'Number of shortlisted properties' },
        { id: 'q12', type: 'numeric', section: 'Section 3: Recent Search Experience',
          title: 'How many property visits felt avoidable or wasted?',
          placeholder: 'Number of avoidable visits' },
        { id: 'q13', type: 'rating', section: 'Section 3: Recent Search Experience',
          title: 'How stressful has the property search process been?',
          labelLow: 'Not stressful', labelHigh: 'Extremely stressful' },
        { id: 'q14', type: 'rating', section: 'Section 3: Recent Search Experience',
          title: 'How physically exhausting has the search been?',
          labelLow: 'Not exhausting', labelHigh: 'Extremely exhausting' },
        { id: 'q15', type: 'text', section: 'Section 3: Recent Search Experience',
          title: 'Which part of the search process took the most time?',
          placeholder: 'Which part took the most time?' },
        { id: 'q16', type: 'text', section: 'Section 3: Recent Search Experience',
          title: 'If you could change one thing about the search process, what would it be?',
          placeholder: 'What one thing would you change?' },
        // SECTION 4: Guidance and Recommendations
        { id: 'q17', type: 'multiple', section: 'Section 4: Guidance and Recommendations', sectionIntro: '🤝 Let\'s talk about the advice and recommendations you received...',
          title: 'Where did you get property recommendations from?',
          hint: 'Select all that apply',
          options: ['Real Estate Agents', 'Property Portals', 'Friends and Family', 'Builders', 'Social Media', 'YouTube', 'Other'] },
        { id: 'q18', type: 'rating', section: 'Section 4: Guidance and Recommendations',
          title: 'How well did recommendations match your actual needs?',
          labelLow: 'Never matched', labelHigh: 'Always matched' },
        { id: 'q19', type: 'rating', section: 'Section 4: Guidance and Recommendations',
          title: 'How often did you receive irrelevant property suggestions?',
          labelLow: 'Never irrelevant', labelHigh: 'Always irrelevant' },
        { id: 'q20', type: 'rating', section: 'Section 4: Guidance and Recommendations',
          title: 'How much do you trust the recommendations you received?',
          labelLow: 'No trust', labelHigh: 'Complete trust' },
        { id: 'q21', type: 'single', section: 'Section 4: Guidance and Recommendations',
          title: 'How often did agents push properties that didn\'t match your criteria?',
          options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
        { id: 'q22', type: 'text', section: 'Section 4: Guidance and Recommendations',
          title: 'Can you describe a situation where a recommendation didn\'t match reality?',
          placeholder: 'Describe a situation where a recommendation didn\'t match reality...' },
        { id: 'q23', type: 'text', section: 'Section 4: Guidance and Recommendations',
          title: 'What makes you trust a property recommendation?',
          placeholder: 'What makes you trust a property recommendation?' },
        // SECTION 5: Challenges and Frictions
        { id: 'q24', type: 'rating', section: 'Section 5: Challenges and Frictions', sectionIntro: '⚡ Almost there! Let\'s identify the biggest pain points...',
          title: 'How much of a problem is budget mismatch in property recommendations?',
          labelLow: 'Not a problem', labelHigh: 'Major problem' },
        { id: 'q25', type: 'rating', section: 'Section 5: Challenges and Frictions',
          title: 'How much of a problem is location mismatch?',
          labelLow: 'Not a problem', labelHigh: 'Major problem' },
        { id: 'q26', type: 'rating', section: 'Section 5: Challenges and Frictions',
          title: 'How much of a problem is the gap between property description and reality?',
          labelLow: 'Not a problem', labelHigh: 'Major problem' },
        { id: 'q27', type: 'rating', section: 'Section 5: Challenges and Frictions',
          title: 'How much pressure do you feel to make quick decisions?',
          labelLow: 'No pressure', labelHigh: 'Extreme pressure' },
        { id: 'q28', type: 'rating', section: 'Section 5: Challenges and Frictions',
          title: 'How much of a problem are hidden details (fees, legal issues, maintenance)?',
          labelLow: 'Not a problem', labelHigh: 'Major problem' },
        { id: 'q29', type: 'rank', section: 'Section 5: Challenges and Frictions',
          title: 'Rank these pain points from most frustrating (1) to least frustrating (8):',
          items: ['Irrelevant Recommendations', 'Time Wasted Visiting', 'Budget Mismatches', 'Hidden Information', 'Pressure From Agents', 'Too Many Choices', 'Too Few Choices', 'Lack of Trust'] },
        { id: 'q30', type: 'single', section: 'Section 5: Challenges and Frictions',
          title: 'If you could eliminate ONE problem from your search, which would it be?',
          options: ['Irrelevant Recommendations', 'Time Wasted Visiting', 'Budget Mismatches', 'Hidden Information', 'Pressure From Agents', 'Too Many Choices', 'Too Few Choices', 'Lack of Trust'] },
        { id: 'q31', type: 'text', section: 'Section 5: Challenges and Frictions',
          title: 'Describe the single most frustrating moment in your property search.',
          placeholder: 'Describe the most frustrating moment...' },
        // SECTION 6: Exploring a Different Approach
        { id: 'q32', type: 'rating', section: 'Section 6: Exploring a Different Approach', sectionIntro: '✨ Final section! We\'d love your thoughts on a new approach...',
          title: 'How valuable would it be to receive only filtered, highly relevant property recommendations?',
          labelLow: 'Not valuable', labelHigh: 'Extremely valuable' },
        { id: 'q33', type: 'rating', section: 'Section 6: Exploring a Different Approach',
          title: 'How valuable would it be if the number of property visits could be reduced by 50%?',
          labelLow: 'Not valuable', labelHigh: 'Extremely valuable' },
        { id: 'q34', type: 'rank', section: 'Section 6: Exploring a Different Approach',
          title: 'Rank what matters most to you (1 = most important):',
          items: ['Fewer Property Visits', 'Better Property Matches', 'More Trustworthy Recommendations', 'Less Time Spent Searching', 'Greater Transparency', 'Reduced Decision Fatigue'] },
        { id: 'q35', type: 'rating', section: 'Section 6: Exploring a Different Approach',
          title: 'How likely are you to try a new service that provides curated, verified property recommendations?',
          labelLow: 'Very unlikely', labelHigh: 'Very likely' },
        { id: 'q36', type: 'text', section: 'Section 6: Exploring a Different Approach',
          title: 'What concerns would you have about trying such a service?',
          placeholder: 'What concerns would you have?' },
        { id: 'q37', type: 'single', section: 'Section 6: Exploring a Different Approach',
          title: 'Would you be interested in being an early user of such a service?',
          options: ['Yes', 'Maybe', 'No'] },
        { id: 'q38', type: 'contact', section: 'Section 6: Exploring a Different Approach',
          title: 'Great! Please share your contact details so we can reach out:',
          conditional: true },
        { id: 'q39', type: 'single', section: 'Section 6: Exploring a Different Approach',
          title: 'Would you be open to a 15-minute follow-up conversation?',
          options: ['Yes', 'No'] },
        { id: 'q40', type: 'text', section: 'Section 6: Exploring a Different Approach',
          title: 'Is there anything else you\'d like to share about your property search experience?',
          placeholder: 'Anything else you\'d like to share?' },
        // Thank you
        { id: 'thankyou', type: 'thankyou', section: null }
    ];

    function getTransitionMessage(questionIndex) {
        // Every question gets a conversational transition based on the PREVIOUS answer
        switch(questionIndex) {
            // After welcome → Q1
            case 1: return '👋 Let\'s start with where you are in your property journey...';
            // After Q1 → Q2 (adaptive)
            case 2:
                if (answers.q1 === 'Yes, actively searching') return '🔥 You\'re in the thick of it! Let\'s understand what you\'re looking for.';
                if (answers.q1 === 'Planning to start within 3 months') return '📋 Smart to plan ahead! Let\'s map out your preferences.';
                if (answers.q1 === 'Planning to start within 12 months') return '🌱 Great timing to start early! Let\'s explore your preferences.';
                return '💡 Your past experience is valuable! Tell us what you were looking for.';
            // After Q2 → Q3
            case 3:
                if (answers.q2 && answers.q2.length > 2) return '🏘️ Quite a diverse search! Now tell us the main purpose...';
                if (answers.q2 && answers.q2.includes('Villa')) return '🏡 Villa living — exciting! What\'s the main goal for this property?';
                if (answers.q2 && answers.q2.includes('Plot')) return '📐 Land hunting — the foundation of something big! What\'s your goal?';
                return '👍 Got it! Now, what\'s the primary purpose of this property?';
            // After Q3 → Q4
            case 4:
                if (answers.q3 === 'Investment') return '📈 Smart investor mindset! Where are you looking to invest?';
                if (answers.q3 === 'Primary Residence') return '🏠 Finding home sweet home! Where are you searching?';
                if (answers.q3 === 'Rental Income') return '💰 Building passive income — great strategy! Which areas?';
                return '✅ Understood! Now, which locations are on your radar?';
            // After Q4 → Q5
            case 5:
                if (answers.q4 && answers.q4.trim()) return `📍 ${answers.q4.split(',')[0].trim()} — nice area! Now let\'s talk budget...`;
                return '📍 Location noted! Let\'s talk about your budget range...';
            // After Q5 → Q6
            case 6:
                if (answers.q5 && answers.q5.includes('Crore')) return '💎 Premium segment — exciting! How confident are you about finding the right one?';
                return '💰 Budget range noted! How confident do you feel about your search?';
            // After Q6 → Q7 (adaptive to confidence)
            case 7:
                if (answers.q6 >= 8) return '💪 High confidence — that\'s great! Still, what\'s your biggest worry?';
                if (answers.q6 >= 5) return '🤞 Moderately confident — totally normal. What concerns you most?';
                return '😟 We hear you — property search can feel overwhelming. What worries you most?';
            // SECTION 3 START: After Q7 → Q8
            case 8: return '🏠 Thanks for sharing! Now let\'s talk about your actual search experience...';
            // After Q8 → Q9
            case 9:
                if (answers.q8 >= 10) return '🏃 Wow, ' + answers.q8 + ' visits! That\'s a lot of legwork. How long has this taken?';
                if (answers.q8 >= 5) return '👟 ' + answers.q8 + ' visits — quite a few! How long has the search been going?';
                return '📝 Noted! How long has your search process taken so far?';
            // After Q9 → Q10
            case 10:
                if (answers.q9 === 'More than 6 months') return '⏳ Over 6 months — that\'s a marathon! How many agents have been involved?';
                if (answers.q9 === '3-6 months') return '📅 Several months of searching. How many brokers have you dealt with?';
                return '⏰ Got it! How many brokers or agents have you interacted with?';
            // After Q10 → Q11
            case 11:
                if (answers.q10 >= 5) return '🤝 ' + answers.q10 + ' agents — that\'s a lot of conversations! How many properties made your shortlist?';
                return '📋 Noted! Out of all those properties, how many made the shortlist?';
            // After Q11 → Q12
            case 12:
                if (answers.q11 <= 2) return '🎯 Only ' + answers.q11 + ' shortlisted — finding the right one is tough! How many visits felt wasted?';
                return '📝 ' + answers.q11 + ' shortlisted. Now honestly — how many visits could have been avoided?';
            // After Q12 → Q13
            case 13:
                if (answers.q12 >= 5) return '😤 ' + answers.q12 + ' avoidable visits — that\'s frustrating time wasted. How stressful was it overall?';
                if (answers.q12 >= 2) return '🤔 A few wasted trips. How stressful was the whole process?';
                return '👍 Not too many wasted visits! Still, how stressful was the overall search?';
            // After Q13 → Q14 (adaptive to stress)
            case 14:
                if (answers.q13 >= 8) return '😓 That sounds really stressful. How mentally exhausting was it?';
                if (answers.q13 >= 5) return '😐 Moderate stress — understandable. How about mental exhaustion?';
                return '😊 Relatively low stress — nice! Was it mentally draining though?';
            // After Q14 → Q15
            case 15:
                if (answers.q14 >= 7) return '🧠 Mental fatigue is real in property search. What part consumed the most time?';
                return '📝 Good to know. Which part of the process ate up the most time?';
            // After Q15 → Q16
            case 16: return '⏱️ Time is precious. If you had a magic wand, what would you change?';
            // SECTION 4 START: After Q16 → Q17
            case 17: return '🤝 Great insights! Now let\'s talk about the advice and recommendations you received...';
            // After Q17 → Q18
            case 18:
                if (answers.q17 && answers.q17.includes('Real Estate Agents')) return '🏢 Agents were in the mix! How well did their recommendations actually match your needs?';
                if (answers.q17 && answers.q17.includes('Friends and Family')) return '👨‍👩‍👧 Family knows best? Let\'s see — how well did recommendations match your needs?';
                return '📡 Interesting sources! How well did recommendations match what you actually wanted?';
            // After Q18 → Q19
            case 19:
                if (answers.q18 <= 4) return '😕 Low match rate — frustrating. How often were suggestions completely irrelevant?';
                if (answers.q18 >= 7) return '👍 Decent matching! But how often did you still get irrelevant suggestions?';
                return '📊 Mixed results. How often did you receive outright irrelevant recommendations?';
            // After Q19 → Q20
            case 20:
                if (answers.q19 >= 7) return '😤 Lots of irrelevant noise — annoying! How much did you trust what you were told?';
                return '📝 Noted! Overall, how much trust did you place in the recommendations?';
            // After Q20 → Q21
            case 21:
                if (answers.q20 <= 4) return '🤨 Low trust — that says a lot. How often did you verify information yourself?';
                return '🔍 Interesting trust level. How often did you independently verify what agents told you?';
            // After Q21 → Q22
            case 22:
                if (answers.q21 === 'Always' || answers.q21 === 'Often') return '🕵️ Smart to verify! Can you share a time when a recommendation didn\'t match reality?';
                return '📝 Got it. Can you describe a specific mismatch between recommendation and reality?';
            // After Q22 → Q23
            case 23: return '🤔 Interesting story! Now flip it — what WOULD make you trust a recommendation?';
            // SECTION 5 START: After Q23 → Q24
            case 24: return '⚡ Almost there! Let\'s zero in on the biggest pain points...';
            // After Q24 → Q25
            case 25:
                if (answers.q24 >= 7) return '💸 Budget mismatch is a big pain! What about location mismatches?';
                return '📝 Noted on budget. How about location — did properties match your area preferences?';
            // After Q25 → Q26
            case 26:
                if (answers.q25 >= 7) return '📍 Location mismatch too — double frustration! What about descriptions vs reality?';
                return '📍 Got it! How about property descriptions — did they match what you actually saw?';
            // After Q26 → Q27
            case 27:
                if (answers.q26 >= 7) return '📸 Misleading descriptions — that breaks trust! Did you feel pressure to decide quickly?';
                return '📝 Description gaps noted. Did you feel pressure to make quick decisions?';
            // After Q27 → Q28
            case 28:
                if (answers.q27 >= 7) return '😰 High pressure tactics — nobody likes that! Were important details hidden from you?';
                return '📋 Pressure level noted. How about transparency — were details hidden until later?';
            // After Q28 → Q29
            case 29:
                if (answers.q28 >= 7) return '🙈 Hidden information is a big red flag! Now rank all these frustrations...';
                return '📝 Got it! Now let\'s rank all these pain points from worst to least...';
            // After Q29 → Q30
            case 30: return '📊 Great ranking! If you could only fix ONE of these, which would it be?';
            // After Q30 → Q31
            case 31: return '🎯 Clear priority! Now tell us your single most frustrating moment...';
            // SECTION 6 START: After Q31 → Q32
            case 32: return '✨ Final section! We\'re exploring something different — your honest thoughts would mean a lot...';
            // After Q32 → Q33
            case 33:
                if (answers.q32 >= 8) return '🌟 High value — that\'s encouraging! What if we could cut property visits in half?';
                if (answers.q32 >= 5) return '🤔 Interesting! What if unnecessary visits could be reduced by 50%?';
                return '📝 Noted. Here\'s another angle — what if property visits were cut in half?';
            // After Q33 → Q34
            case 34:
                if (answers.q33 >= 8) return '🎯 Huge value in saving time! Let\'s understand what matters most to you...';
                return '📝 Got it! Now rank what would matter most in an ideal service...';
            // After Q34 → Q35
            case 35: return '📋 Priorities clear! One key question — would you actually try such a platform?';
            // After Q35 → Q36 (adaptive)
            case 36:
                if (answers.q35 >= 8) return '🎉 Amazing! What concerns might still hold you back?';
                if (answers.q35 >= 5) return '🤔 Open to it! What would you need to feel comfortable trying it?';
                return '👍 Fair enough! What would concern you about trying something new?';
            // After Q36 → Q37
            case 37: return '🙏 Thanks for being honest! Last few questions — would you want early access?';
            // After Q37 → Q38 (adaptive)
            case 38:
                if (answers.q37 === 'Yes') return '🎊 Fantastic! We\'d love to keep in touch — drop your details below:';
                return '😊 Great — just in case you change your mind, here\'s where to leave your info:';
            // After Q38 → Q39
            case 39: return '📞 One more — would you be open to a quick follow-up chat?';
            // After Q39 → Q40
            case 40: return '🏁 Last question! Anything else on your mind about property search?';
            default: return null;
        }
    }

    function shouldSkipQuestion(index) {
        // Q38 (index 38) only shows if Q37 is Yes or Maybe
        if (index === 38) {
            return answers.q37 === 'No';
        }
        return false;
    }

    function getEffectiveQuestionNumber() {
        let count = 0;
        for (let i = 1; i <= currentQuestion; i++) {
            if (i <= totalQuestions && !shouldSkipQuestion(i)) count++;
        }
        return count;
    }

    function getEffectiveTotalQuestions() {
        let count = 0;
        for (let i = 1; i <= totalQuestions; i++) {
            if (!shouldSkipQuestion(i)) count++;
        }
        return count;
    }

    function updateProgress() {
        const container = document.getElementById('progressContainer');
        if (currentQuestion === 0 || currentQuestion > totalQuestions) {
            container.classList.add('hidden');
            return;
        }
        container.classList.remove('hidden');
        const effective = getEffectiveQuestionNumber();
        const total = getEffectiveTotalQuestions();
        const percent = Math.round((effective / total) * 100);
        document.getElementById('progressText').textContent = `Question ${effective} of ${total}`;
        document.getElementById('progressPercent').textContent = `${percent}%`;
        document.getElementById('progressBar').style.width = `${percent}%`;
    }

    function renderQuestion() {
        // Handle skipping
        if (currentQuestion > 0 && currentQuestion <= totalQuestions && shouldSkipQuestion(currentQuestion)) {
            currentQuestion++;
            renderQuestion();
            return;
        }

        const q = questions[currentQuestion];
        const content = document.getElementById('surveyContent');
        content.innerHTML = '';
        updateProgress();

        if (q.type === 'welcome') {
            renderWelcome(content);
            return;
        }
        if (q.type === 'thankyou') {
            renderThankYou(content);
            return;
        }

        let html = '';

        // Transition message (always shows on every question)
        const transition = getTransitionMessage(currentQuestion);
        if (transition) {
            html += `<div class="transition-message">${transition}</div>`;
        }

        html += '<div class="question-card">';
        if (q.section) {
            html += `<div class="section-header">${q.section}</div>`;
        }
        html += `<div class="question-title">${q.title}</div>`;
        if (q.hint) {
            html += `<div class="question-hint">${q.hint}</div>`;
        }

        switch (q.type) {
            case 'single': html += renderSingle(q); break;
            case 'multiple': html += renderMultiple(q); break;
            case 'text': html += renderText(q); break;
            case 'numeric': html += renderNumeric(q); break;
            case 'rating': html += renderRating(q); break;
            case 'rank': html += renderRank(q); break;
            case 'contact': html += renderContact(q); break;
        }

        html += renderButtons();
        html += '</div>';

        content.innerHTML = html;
        attachEventListeners(q);
        updateNextButton();
    }

    function renderWelcome(container) {
        container.innerHTML = `
            <div class="question-card">
                <div class="welcome-content">
                    <h1>🏡 Real Estate Property Search Survey</h1>
                    <p>Thank you for taking the time to share your property search experience with us.</p>
                    <p>This survey will help us understand the challenges people face when searching for properties in India, and explore how we can make the process better.</p>
                    <div class="highlight">
                        <strong>⏱️ Time:</strong> ~10-12 minutes<br>
                        <strong>📝 Questions:</strong> 40 questions across 6 sections<br>
                        <strong>🔒 Privacy:</strong> Your responses are confidential and used only for research purposes.
                    </div>
                    <p style="margin-top:20px; font-size:14px; color:#9ca3af;">There are no right or wrong answers — we just want your honest experience.</p>
                    <button class="btn-begin" onclick="startSurvey()">Begin Survey →</button>
                </div>
            </div>`;
    }

    function renderThankYou(container) {
        playCompletionSound();
        container.innerHTML = `
            <div class="question-card">
                <div class="thank-you">
                    <h2>🙏 Thank you so much for your time!</h2>
                    <p style="font-size:18px; margin-bottom:12px;">Your insights are incredibly valuable.</p>
                    <p>Your responses have been recorded and will help us build a better property search experience for everyone.</p>
                    <p style="margin-top:24px; color:#4F46E5; font-weight:500;">Together, we can make property search less stressful! 🏡✨</p>
                </div>
            </div>`;
        showConfetti();
        submitSurvey();
        console.log('Survey Complete! Responses:', JSON.stringify(answers, null, 2));
    }

    function renderSingle(q) {
        let html = '<div class="options-grid">';
        q.options.forEach(opt => {
            const selected = answers[q.id] === opt ? 'selected' : '';
            html += `<div class="option-card ${selected}" data-value="${opt}">
                <div class="option-indicator"></div>
                <span>${opt}</span>
            </div>`;
        });
        html += '</div>';
        return html;
    }

    function renderMultiple(q) {
        let html = '<div class="options-grid">';
        const selectedArr = answers[q.id] || [];
        q.options.forEach(opt => {
            const selected = selectedArr.includes(opt) ? 'selected' : '';
            html += `<div class="option-card ${selected}" data-value="${opt}" data-type="multi">
                <div class="option-indicator checkbox-indicator"></div>
                <span>${opt}</span>
            </div>`;
        });
        html += '</div>';
        return html;
    }

    function renderText(q) {
        const val = answers[q.id] || '';
        return `<textarea class="text-input" id="textAnswer" placeholder="${q.placeholder || ''}">${val}</textarea>`;
    }

    function renderNumeric(q) {
        const val = answers[q.id] || 0;
        return `<div class="numeric-container">
            <button class="numeric-btn" onclick="adjustNumeric(-1)">−</button>
            <input type="number" class="numeric-input" id="numericAnswer" value="${val}" min="0" placeholder="${q.placeholder || '0'}">
            <button class="numeric-btn" onclick="adjustNumeric(1)">+</button>
        </div>`;
    }

    function renderRating(q) {
        const val = answers[q.id] || 0;
        let html = '<div class="rating-container">';
        for (let i = 1; i <= 10; i++) {
            const active = i <= val ? 'active' : '';
            html += `<button class="rating-btn ${active}" data-rating="${i}">${i}</button>`;
        }
        html += '</div>';
        html += `<div class="rating-labels"><span>${q.labelLow}</span><span>${q.labelHigh}</span></div>`;
        return html;
    }

    function renderRank(q) {
        let html = '<div class="rank-container">';
        const existing = answers[q.id] || {};
        q.items.forEach((item, idx) => {
            const val = existing[item] || '';
            html += `<div class="rank-item">
                <label>${item}</label>
                <select class="rank-select" data-item="${item}">
                    <option value="">--</option>`;
            for (let i = 1; i <= q.items.length; i++) {
                const sel = val == i ? 'selected' : '';
                html += `<option value="${i}" ${sel}>${i}${getOrdinalSuffix(i)}</option>`;
            }
            html += `</select></div>`;
        });
        html += '</div>';
        return html;
    }

    function renderContact(q) {
        const val = answers[q.id] || {};
        return `<div class="contact-form">
            <div class="form-group">
                <label for="contactName">Name</label>
                <input type="text" class="form-input" id="contactName" placeholder="Your name" value="${val.name || ''}">
            </div>
            <div class="form-group">
                <label for="contactEmail">Email</label>
                <input type="email" class="form-input" id="contactEmail" placeholder="your@email.com" value="${val.email || ''}">
            </div>
            <div class="form-group">
                <label for="contactPhone">Phone</label>
                <input type="tel" class="form-input" id="contactPhone" placeholder="+91 XXXXX XXXXX" value="${val.phone || ''}">
            </div>
        </div>`;
    }

    function renderButtons() {
        const isFirst = currentQuestion <= 1;
        const isLast = currentQuestion >= totalQuestions;
        const q = questions[currentQuestion];
        // For types that auto-advance (single, rating), only show Submit on last question
        const autoAdvanceTypes = ['single', 'rating'];
        const needsManualNext = !autoAdvanceTypes.includes(q.type) || isLast;
        return `<div class="btn-container">
            ${!isFirst ? '<button class="btn-back" onclick="goBack()">← Back</button>' : '<div></div>'}
            ${needsManualNext ? `<button class="btn-next" id="nextBtn" onclick="goNext()">${isLast ? 'Submit Survey ✓' : 'Next →'}</button>` : ''}
        </div>`;
    }

    // --- SOUND EFFECTS (Web Audio API, no external files) ---
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    let audioCtx = null;
    function getAudioCtx() { if (!audioCtx) audioCtx = new AudioCtx(); return audioCtx; }

    function playClickSound() {
        try {
            const ctx = getAudioCtx();
            // Clean mechanical click — like a mouse click or toggle switch
            const bufferSize = ctx.sampleRate * 0.02; // 20ms
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.1));
            }
            const source = ctx.createBufferSource();
            source.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = 3000;
            filter.Q.value = 2;
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
            source.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            source.start(ctx.currentTime);
        } catch(e) {}
    }

    function playCompletionSound() {
        try {
            const ctx = getAudioCtx();
            // Celebratory fanfare — ascending bright tones like a level-up
            const notes = [523, 659, 784, 988, 1175, 1568]; // C5 E5 G5 B5 D6 G6
            notes.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = 'sine';
                const startTime = ctx.currentTime + i * 0.1;
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.15, startTime);
                gain.gain.setValueAtTime(0.15, startTime + 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.5);
                osc.start(startTime);
                osc.stop(startTime + 0.5);
            });
            // Final shimmer chord at the end
            setTimeout(() => {
                const chord = [1047, 1319, 1568]; // C6 E6 G6 together
                chord.forEach(freq => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, ctx.currentTime);
                    gain.gain.setValueAtTime(0.1, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.0);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 1.0);
                });
            }, 600);
        } catch(e) {}
    }

    function autoAdvance() {
        playClickSound();
        setTimeout(() => goNext(), 400);
    }

    function attachEventListeners(q) {
        // Single select — auto-advance on click
        if (q.type === 'single') {
            document.querySelectorAll('.option-card').forEach(card => {
                card.addEventListener('click', () => {
                    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                    answers[q.id] = card.dataset.value;
                    // Auto-advance unless it's the last question
                    if (currentQuestion < totalQuestions) {
                        autoAdvance();
                    } else {
                        updateNextButton();
                    }
                });
            });
        }

        // Multiple select
        if (q.type === 'multiple') {
            document.querySelectorAll('.option-card[data-type="multi"]').forEach(card => {
                card.addEventListener('click', () => {
                    card.classList.toggle('selected');
                    const selected = [];
                    document.querySelectorAll('.option-card.selected').forEach(c => selected.push(c.dataset.value));
                    answers[q.id] = selected;
                    updateNextButton();
                });
            });
        }

        // Text
        if (q.type === 'text') {
            const textarea = document.getElementById('textAnswer');
            if (textarea) {
                textarea.addEventListener('input', () => {
                    answers[q.id] = textarea.value;
                    updateNextButton();
                });
            }
        }

        // Numeric
        if (q.type === 'numeric') {
            const input = document.getElementById('numericAnswer');
            if (input) {
                input.addEventListener('input', () => {
                    answers[q.id] = parseInt(input.value) || 0;
                    updateNextButton();
                });
            }
        }

        // Rating — auto-advance on click
        if (q.type === 'rating') {
            document.querySelectorAll('.rating-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const val = parseInt(btn.dataset.rating);
                    answers[q.id] = val;
                    document.querySelectorAll('.rating-btn').forEach((b, i) => {
                        b.classList.toggle('active', (i + 1) <= val);
                    });
                    // Auto-advance unless it's the last question
                    if (currentQuestion < totalQuestions) {
                        autoAdvance();
                    } else {
                        updateNextButton();
                    }
                });
            });
        }

        // Rank
        if (q.type === 'rank') {
            document.querySelectorAll('.rank-select').forEach(sel => {
                sel.addEventListener('change', () => {
                    const rankData = {};
                    document.querySelectorAll('.rank-select').forEach(s => {
                        if (s.value) rankData[s.dataset.item] = parseInt(s.value);
                    });
                    answers[q.id] = rankData;
                    updateNextButton();
                });
            });
        }

        // Contact
        if (q.type === 'contact') {
            ['contactName', 'contactEmail', 'contactPhone'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.addEventListener('input', () => {
                        answers[q.id] = {
                            name: document.getElementById('contactName').value,
                            email: document.getElementById('contactEmail').value,
                            phone: document.getElementById('contactPhone').value
                        };
                        updateNextButton();
                    });
                }
            });
        }
    }

    function updateNextButton() {
        const btn = document.getElementById('nextBtn');
        if (!btn) return;
        const q = questions[currentQuestion];
        let hasAnswer = false;

        switch (q.type) {
            case 'single':
                hasAnswer = !!answers[q.id];
                break;
            case 'multiple':
                hasAnswer = answers[q.id] && answers[q.id].length > 0;
                break;
            case 'text':
                hasAnswer = !!(answers[q.id] && answers[q.id].trim());
                break;
            case 'numeric':
                hasAnswer = answers[q.id] !== undefined && answers[q.id] !== '';
                break;
            case 'rating':
                hasAnswer = !!answers[q.id];
                break;
            case 'rank':
                hasAnswer = answers[q.id] && Object.keys(answers[q.id]).length === q.items.length;
                break;
            case 'contact':
                const c = answers[q.id];
                hasAnswer = c && c.name && c.email;
                break;
        }

        btn.disabled = !hasAnswer;
    }

    function startSurvey() {
        currentQuestion = 1;
        renderQuestion();
    }

    function goNext() {
        playClickSound();
        if (currentQuestion >= totalQuestions) {
            currentQuestion = totalQuestions + 1;
            renderQuestion();
            return;
        }
        currentQuestion++;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function goBack() {
        if (currentQuestion <= 1) return;
        currentQuestion--;
        // Skip conditional questions when going back too
        if (shouldSkipQuestion(currentQuestion)) {
            currentQuestion--;
        }
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function adjustNumeric(delta) {
        const input = document.getElementById('numericAnswer');
        if (!input) return;
        let val = parseInt(input.value) || 0;
        val = Math.max(0, val + delta);
        input.value = val;
        const q = questions[currentQuestion];
        answers[q.id] = val;
        updateNextButton();
    }

    function getOrdinalSuffix(n) {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    }

    function showConfetti() {
        const container = document.createElement('div');
        container.className = 'confetti-container';
        document.body.appendChild(container);

        const colors = ['#4F46E5', '#7c3aed', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];
        for (let i = 0; i < 60; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
            confetti.style.width = (6 + Math.random() * 8) + 'px';
            confetti.style.height = (6 + Math.random() * 8) + 'px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            container.appendChild(confetti);
        }

        setTimeout(() => container.remove(), 5000);
    }

    async function submitSurvey() {
        try {
            // Use an iframe-based form submission to avoid CORS entirely
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = "https://script.google.com/macros/s/AKfycbxWIcJOQUQZTfpEwH57DvJhyfcNYDqn52q9XKavH98YuH91uW6Vg2HtjgU7NwcXVytrhQ/exec";
            form.target = '_blank';
            form.style.display = 'none';
            
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'data';
            input.value = JSON.stringify(answers);
            form.appendChild(input);
            
            // Use a hidden iframe to prevent page navigation
            const iframe = document.createElement('iframe');
            iframe.name = 'submitFrame';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            form.target = 'submitFrame';
            
            document.body.appendChild(form);
            form.submit();
            
            // Cleanup
            setTimeout(() => {
                form.remove();
                iframe.remove();
            }, 3000);
            
            console.log("Survey submitted successfully");
        } catch(error) {
            console.error("Submission failed", error);
        }
    }

    // Initialize
    renderQuestion();
