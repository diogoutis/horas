        const META_HORAS = 200;

        // Valores iniciais para cada dia [horas, minutos, segundos]
        const valoresIniciais = [
            [9, 1, 37], [3, 59, 58], [4, 24, 43], [, , ], [, , ],
            [8, 27, 42], [7, 53, 39], [7, 56, 43], [6, 3, 2], [5, 32,21], [, ,],
            [9, 17, 55], [10, 0,45], [9, 25, 48], [10, 25, 28], [6, 11,15],
            [, ,], [, ,], [9, 4, 47], [9, 47, 18], [7, 44,45], [10, 29,12], [, ,],
            [6, 13,28], [3, 24,55], [9, 55,51], [9, 33,25], [, ,],
            [, ,], [, ,], [, ,], [, ,], [, ,],
            [, ,]  // Dia 31
        ];

        function createInputs() {
            const container = document.getElementById('inputsContainer');
            for (let i = 1; i <= 31; i++) {
                let [h, m, s] = valoresIniciais[i - 1] || [];

                const dayDiv = document.createElement('div');
                dayDiv.classList.add('day-container');
                dayDiv.innerHTML = `
                    <h3>Dia ${i}</h3>
                    <input type="number" id="hours${i}" class="campos" ${h !== undefined ? `value="${h}"` : ''} oninput="sumTimes()">
                    <input type="number" id="minutes${i}" class="campos" ${m !== undefined ? `value="${m}"` : ''} oninput="sumTimes()">
                    <input type="number" id="seconds${i}" class="campos" ${s !== undefined ? `value="${s}"` : ''} oninput="sumTimes()">
                    <button type="button" class="arrow-btn" id="btn${i}" data-day="${i}">▶</button>
                    <div id="iframeContainer${i}" class="iframe-container" style="display:none; margin-top: 10px;"></div>
                `;
                container.appendChild(dayDiv);
            }

            sumTimes(); // Calcula o total com os valores iniciais
        }

        function sumTimes() {
            let totalSeconds = 0;
            let totalMinutes = 0;
            let totalHours = 0;

            for (let i = 1; i <= 31; i++) {
                const hours = parseInt(document.getElementById(`hours${i}`).value) || 0;
                const minutes = parseInt(document.getElementById(`minutes${i}`).value) || 0;
                const seconds = parseInt(document.getElementById(`seconds${i}`).value) || 0;

                totalSeconds += seconds;
                totalMinutes += minutes;
                totalHours += hours;
            }

            totalMinutes += Math.floor(totalSeconds / 60);
            totalSeconds = totalSeconds % 60;
            totalHours += Math.floor(totalMinutes / 60);
            totalMinutes = totalMinutes % 60;

            document.getElementById('result').textContent =
                `Tempo total: ${totalHours} hora(s), ${totalMinutes} minuto(s) e ${totalSeconds} segundo(s).`;

            const faltamHoras = META_HORAS - totalHours;
            const metaDiv = document.getElementById('meta');
            const extraDiv = document.getElementById('extraHours');

            if (faltamHoras > 0) {
                metaDiv.textContent = `Faltam ${faltamHoras} horas para atingir a meta.`;
                metaDiv.style.color = 'rgb(172, 0, 0)';
            } else {
                metaDiv.textContent = `Meta de 200 horas atingida!`;
                metaDiv.style.color = 'green';
            }

        }




        const floating = document.getElementById('floatingContent');

        // Conteúdo por dia (pode personalizar por número do dia)
        const exampleLinks = {
            1: '<a href="https://kick.com/luanz7/videos/9322a4a8-cebd-4bb6-936d-82c27ec32ec9" target="_blank">BOA SEMANA 🔥 | !clash !alfabet Siga @LUANZ7 nas redes sociais </a>',
            2: '<a href="https://kick.com/luanz7/videos/43357ab5-156c-4ab1-aa00-2670fa21975e" target="_blank">SEXTOU 🔥 | !clash !alfabet Siga @LUANZ7 nas redes sociais</a>',
            3: `<a href="https://kick.com/luanz7/videos/d8031a71-58bb-4a98-bf50-3cf2c2024d49" target="_blank">SABADO DOS CRIA 🔥 | !clash !alfabet Siga @LUANZ7 nas redes sociais</a> <br>
                <p style="margin-bottom: 0px"><a href="https://kick.com/luanz7/videos/bccb4815-1228-4a54-81bf-bcfa332376a3" target="_blank">SABADO DOS CRIA 🔥 | !clash !alfabet Siga @LUANZ7 nas redes sociais</a></p>`,
            4: '<p>GOAT</p>',
            5: '<p>Ia Kings League, ficou doente.</p>',
            6: '<a href="https://kick.com/luanz7/videos/db29b0b0-4cc2-40cc-9527-830f9794b26d" target="_blank">TIME NOVO 🔥 | !clash !alfabet Siga @LUANZ7 nas redes sociais </a>',
            7: '<a href="https://kick.com/luanz7/videos/1ea98d2d-51f3-4384-9369-c3498a9c4362" target="_blank">A VOLTA FINALMENTE ? 🔥 | !clash !alfabet Siga @LUANZ7 nas redes sociais </a>',
            8: '<a href="https://kick.com/luanz7/videos/2355abcc-f308-4886-9131-51ebbc737343" target="_blank">FELICIDADE 🔥 | !clash !alfabet Siga @LUANZ7 nas redes sociais </a>',
            9: '<a href="https://kick.com/luanz7/videos/450b6b5a-4f5b-43b0-8ba3-64186422fae5" target="_blank">QUALIFY COM DELAY 🔥 | !clash !alfabet Siga @LUANZ7 nas redes sociais </a>',
            10: 'PRIVADO',
            11: 'provavelmente GOAT',
            12: '<a href="https://kick.com/luanz7/videos/af0be2d1-ad59-44c6-8705-e91dac84d148" target="_blank">DIA DE VINGANÇA🐐🔥 | !clash !motherland Siga @LUANZ7 nas redes sociais </a>',
            13: '<a href="https://kick.com/luanz7/videos/fb034981-c527-4c6a-92ca-b884f9e96f10" target="_blank">DIA DE VINGANÇA🐐🔥 | !clash !alfabet Siga @LUANZ7 nas redes sociais </a>',
            14: '<a href="https://kick.com/luanz7/videos/1eda7db3-5d9a-41e0-8756-f9076ebdf43f" target="_blank">GUERRA🐐🔥 | !clash !alfabet Siga @LUANZ7 nas redes sociais </a>',
            15: '<a href="https://kick.com/luanz7/videos/3ce33b70-0cbf-4654-b0cc-fda5b51949a7" target="_blank">GUERRA🐐🔥 | !clash !alfabet Siga @LUANZ7 nas redes sociais </a>',
            16: 'PRIVADO',
            17: 'GOAT',
            18: 'GOAT',
            19: `<a href="https://kick.com/luanz7/videos/6fb0aa4a-f330-4737-a047-abc5ea632670" target="_blank">SEGUNDA ANIMADA | !clash !alfabet Siga @LUANZ7 nas redes sociais </a> <br>
                <p style="margin-bottom: 0px"><a href="https://kick.com/luanz7/videos/62365380-20ce-419b-9307-f28b4d496025" target="_blank">SEGUNDA ANIMADA | !clash !alfabet Siga @LUANZ7 nas redes sociais </a></p>`,
            20: `<a href="https://kick.com/luanz7/videos/07a8af2a-d8a0-4c9d-ae96-b3caac224577" target="_blank">DIA DE INVASAO| !clash !alfabet Siga @LUANZ7 nas redes sociais </a> <br>
                <p style="margin-bottom: 0px"><a href="https://kick.com/luanz7/videos/e87d470f-1fef-45b9-872a-6e35c4dcec4f" target="_blank">DIA DE INVASAO | Siga @LUANZ7 nas redes sociais </a></p>`,
            21: '<a href="https://kick.com/luanz7/videos/de623443-b6bc-48b4-b813-e0e55f998118" target="_blank">DIA DE INVASAO | Siga @LUANZ7 nas redes sociais</a>',
            22: '<a href="https://kick.com/luanz7/videos/3e0d844c-8afb-47a0-9d8a-c61db017152f" target="_blank">REFORMULAÇÃO NA FRANÇA ? | Siga @LUANZ7 nas redes sociais</a>',
            23: '<a href="" target="_blank"></a>',
            24: '<a href="https://kick.com/luanz7/videos/053edd2e-8360-4fb0-90c0-70cf24ca379f" target="_blank">QUALIFY GOAT | Siga @LUANZ7 nas redes sociais </a>',
            25: '<a href="https://kick.com/luanz7/videos/fe2c2097-7f6b-4e87-a2a6-b323fdbeff7b" target="_blank">DOMINGAO | Siga @LUANZ7 nas redes sociais </a>',
            26: '<a href="https://kick.com/luanz7/videos/007c2ddf-cc43-44c5-b621-514004d95345" target="_blank">SEGUNDA CRUEL | Siga @LUANZ7 nas redes sociais </a>',
            27: '<a href="https://kick.com/luanz7/videos/661f162b-c55c-4f71-82d4-b644f88b3e88" target="_blank">OQUE TEREMOS PARA HOJE ? | Siga @LUANZ7 nas redes sociais</a>',
            28: '<a href="" target="_blank"></a>',
            29: '<a href="" target="_blank"></a>',
            30: '<a href="" target="_blank"></a>',
            31: '<a href="" target="_blank"></a>',
        };

        function showFloating(day, rect) {
            floating.innerHTML = exampleLinks[day] || `<p>...</p>`;
            floating.style.top = `${window.scrollY + rect.top}px`; // alinha verticalmente com o botão
            floating.style.left = `${rect.right + 10}px`; // aparece à direita do botão, com espaço de 10px
            floating.style.display = 'block';
            floating.dataset.day = day;
        }

        function hideFloating() {
            floating.style.display = 'none';
            floating.dataset.day = '';
        }

        // Adiciona o evento a cada botão após os inputs serem criados
        function addHoverEvents() {
            const buttons = document.querySelectorAll('.arrow-btn');

            buttons.forEach(button => {
                const day = button.dataset.day;

                button.addEventListener('mouseenter', (e) => {
                    const rect = button.getBoundingClientRect();
                    showFloating(day, rect);
                });

                button.addEventListener('mouseleave', () => {
                    setTimeout(() => {
                        if (!floating.matches(':hover')) {
                            hideFloating();
                        }
                    }, 200);
                });
            });

            floating.addEventListener('mouseleave', hideFloating);
            floating.addEventListener('mouseenter', () => {}); // Evita que feche ao passar o mouse
        }




        createInputs(); // Executa ao carregar a página
        addHoverEvents(); // ⬅ adiciona os eventos ao carregar
