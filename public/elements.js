/**
 * Ismael Marín - Elements Interactivity & Logic (elements.js)
 */

(function() {
    'use strict';

    // Constants
    const TIMING = {
        TYPING_SPEED: 60,
        INTRO_DELAY: 400,
        OUTPUT_DELAY: 500,
        START_DELAY: 500,
        SCROLL_FIX_DELAY: 3000,
        HEADER_OFFSET: 90
    };

    // Store timer for cleanup
    let introTimer = null;

    document.addEventListener('DOMContentLoaded', () => {
        initMobileMenu();
        initSpotlightGlows();
        initSmoothScroll();
        initTerminalWidget();
    });

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-btn';
    menuBtn.ariaLabel = 'Toggle navigation menu';
    menuBtn.innerHTML = '<span></span><span></span><span></span>';

    const navbarContainer = document.querySelector('.navbar-container');
    const navLinks = document.querySelector('.nav-links');

    if (navbarContainer && navLinks) {
        // Insert menu button before nav-links container
        navbarContainer.insertBefore(menuBtn, navLinks);

        // Create Mobile Drawer
        const drawer = document.createElement('div');
        drawer.className = 'mobile-drawer';
        
        // Clone nav links for mobile drawer
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            const clonedLink = link.cloneNode(true);
            clonedLink.addEventListener('click', () => {
                drawer.classList.remove('open');
                menuBtn.classList.remove('active');
            });
            drawer.appendChild(clonedLink);
        });

        // Add brand copy/title to mobile drawer footer
        const drawerFooter = document.createElement('div');
        drawerFooter.style.marginTop = 'auto';
        drawerFooter.style.fontSize = '0.75rem';
        drawerFooter.style.color = 'var(--color-text-muted)';
        drawerFooter.innerText = '© 2026 Ismael Marín';
        drawer.appendChild(drawerFooter);

        document.body.appendChild(drawer);

        // Toggle Event
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            drawer.classList.toggle('open');
        });
    }
}

/**
 * Interactive Terminal Simulation with Command Inputs
 */
function initTerminalWidget() {
    const terminalBody = document.getElementById('terminal-body');
    if (!terminalBody) return;

    // Clear initial content and build structure
    terminalBody.innerHTML = '';
    
    // Track if intro is complete
    let introComplete = false;
    
    // Disable scroll during intro to prevent page scroll interference
    terminalBody.style.overflow = 'hidden';
    
    // Command history and buffer
    const history = [];
    let historyIndex = -1;

    // Output utility
    function printLine(html, type = 'normal') {
        const line = document.createElement('div');
        line.className = `terminal-line type-${type}`;
        line.innerHTML = html;
        terminalBody.appendChild(line);
        // Only auto-scroll after intro is complete
        if (introComplete) {
            requestAnimationFrame(() => {
                terminalBody.scrollTop = terminalBody.scrollHeight;
            });
        }
    }

    // Command runner
    const commands = {
        help: () => {
            printLine('Available commands:<br>' +
                      '  <span class="text-primary">about</span>     - Profile summary<br>' +
                      '  <span class="text-primary">projects</span>  - Review projects gallery<br>' +
                      '  <span class="text-primary">skills</span>    - Technical stack blueprint<br>' +
                      '  <span class="text-primary">contact</span>   - Get connectivity credentials<br>' +
                      '  <span class="text-primary">clear</span>     - Clear shell terminal screen');
        },
        about: () => {
            printLine('<span class="text-text-primary">Ismael Marín</span><br>' +
                      'Role: Staff Engineering Lead & AI Infrastructure Creator<br>' +
                      'Experience: 20+ years of high-performance architecture<br>' +
                      'Location: Remote / Global');
        },
        projects: () => {
            printLine('Selected Projects:<br>' +
                      '  * <span class="text-primary">Rails AI Bridge</span> - Bridge Rails apps with LLM agents.<br>' +
                      '  * <span class="text-tertiary">Ruby Skill Bench</span> - Testing & benchmarking for AI.<br>' +
                      '  * <span class="text-secondary">Search Overhaul</span> - Distributed Elasticsearch/Kafka/Rust engine.');
        },
        skills: () => {
            printLine('Technical Stack Blueprint:<br>' +
                      '  [Languages]  : Ruby (Mastery), Python, Rust<br>' +
                      '  [Frameworks] : Rails (20 yrs), FastAPI, LangChain<br>' +
                      '  [Systems]    : PostgreSQL, Kafka, Docker<br>' +
                      '  [AI Infra]   : Agentic Arch, Vector DBs, Prompt Engineering, LLM APIs & Evals');
        },
        contact: () => {
            printLine('Connectivity Protocol:<br>' +
                      '  GitHub   : <a href="https://github.com/igmarin" class="text-tertiary" target="_blank">github.com/igmarin</a><br>' +
                      '  LinkedIn : <a href="https://linkedin.com/in/ismaelmarin" class="text-tertiary" target="_blank">linkedin.com/in/ismaelmarin</a><br>' +
                      '  Email    : <span class="text-primary">ismael.marin@gmail.com</span>');
        },
        clear: () => {
            terminalBody.innerHTML = '';
            setupPrompt();
        }
    };

    function executeCommand(cmdStr) {
        const trimmed = cmdStr.trim();
        if (trimmed) {
            history.push(trimmed);
        }
        historyIndex = history.length;

        // Print input representation
        printLine(`<span class="text-primary">welcome</span><span class="text-text-muted">@main</span> <span class="text-tertiary">$</span> ${trimmed}`);
        
        if (!trimmed) {
            setupPrompt();
            return;
        }

        const cmd = trimmed.toLowerCase();
        if (commands[cmd]) {
            commands[cmd]();
        } else {
            printLine(`Command not found: "${trimmed}". Type <span class="text-primary">help</span> for options.`, 'error');
        }
        setupPrompt();
    }

    // Helper function to generate terminal prompt HTML
    function getPromptHTML() {
        return '<span class="text-primary">welcome</span><span class="text-text-muted">@main</span> <span class="text-tertiary">$</span>';
    }

    // Prompt input creation
    function setupPrompt() {
        // Mark intro as complete and re-enable terminal scroll
        introComplete = true;
        terminalBody.style.overflow = 'auto';
        
        const promptContainer = document.createElement('div');
        promptContainer.className = 'terminal-prompt-container';
        promptContainer.style.display = 'flex';
        promptContainer.style.alignItems = 'center';
        promptContainer.style.marginTop = '0.5rem';

        const promptText = document.createElement('span');
        promptText.innerHTML = getPromptHTML() + '&nbsp;';

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'terminal-input';
        input.style.background = 'transparent';
        input.style.border = 'none';
        input.style.outline = 'none';
        input.style.color = 'var(--color-text-primary)';
        input.style.fontFamily = 'inherit';
        input.style.fontSize = 'inherit';
        input.style.flex = '1';
        input.style.caretColor = 'var(--color-primary)';

        promptContainer.appendChild(promptText);
        promptContainer.appendChild(input);
        terminalBody.appendChild(promptContainer);
        
        // Scroll to bottom to show the prompt
        requestAnimationFrame(() => {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        });
        
        // Don't auto-focus during intro to prevent scroll interference
        // Focus will happen when user clicks on terminal

        // Terminal click refocus - use event delegation to avoid accumulation
        const clickHandler = () => input.focus();
        terminalBody.addEventListener('click', clickHandler);
        
        // Store handler for cleanup
        promptContainer._clickHandler = clickHandler;

        // Key handlers
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const val = input.value;
                // Cleanup event listener before removing
                terminalBody.removeEventListener('click', promptContainer._clickHandler);
                promptContainer.remove();
                executeCommand(val);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    input.value = history[historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < history.length - 1) {
                    historyIndex++;
                    input.value = history[historyIndex];
                } else {
                    historyIndex = history.length;
                    input.value = '';
                }
            }
        });
    }

    // Auto-typing animation for intro
    const introCommands = [
        { type: 'input', text: 'whoami' },
        { type: 'output', text: '> Ismael Marin' },
        { type: 'input', text: 'cat status.yml' },
        { type: 'output', text: '# Core Attributes\nrole: "Staff Engineering Lead"\nfocus: ["Backend", "Software Engineering", "AI Implementation", "Best Practices"]\nexperience: "20+ years"\nlocation: "Remote / Global"' },
        { type: 'input', text: 'help' }
    ];

    let step = 0;
    function runIntro() {
        if (step >= introCommands.length) {
            setupPrompt();
            return;
        }

        const current = introCommands[step];
        if (current.type === 'input') {
            // Typing simulation
            const promptLine = document.createElement('div');
            promptLine.className = 'terminal-line';
            promptLine.innerHTML = `${getPromptHTML()} <span class="typewriter-text"></span><span class="blinking-cursor"></span>`;
            terminalBody.appendChild(promptLine);
            // Don't auto-scroll during intro to prevent page scroll interference

            const textSpan = promptLine.querySelector('.typewriter-text');
            const cursor = promptLine.querySelector('.blinking-cursor');
            let charIndex = 0;

            introTimer = setInterval(() => {
                if (charIndex < current.text.length) {
                    textSpan.textContent += current.text[charIndex];
                    charIndex++;
                } else {
                    clearInterval(introTimer);
                    cursor.remove();
                    step++;
                    setTimeout(runIntro, TIMING.INTRO_DELAY);
                }
            }, TIMING.TYPING_SPEED);
        } else {
            // Instant print for command output
            printLine(current.text.replace(/\n/g, '<br>'));
            step++;
            setTimeout(runIntro, TIMING.OUTPUT_DELAY);
        }
    }

    // Start intro sequence
    setTimeout(runIntro, TIMING.START_DELAY);

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (introTimer) {
            clearInterval(introTimer);
        }
    });
}


/**
 * 3D Spotlight/Glow Effect following Cursor on Cards
 */
function initSpotlightGlows() {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position inside element
            const y = e.clientY - rect.top;  // y position inside element

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

/**
 * Smooth Scroll Anchor Navigation
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const headerOffset = TIMING.HEADER_OFFSET;
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

})();
