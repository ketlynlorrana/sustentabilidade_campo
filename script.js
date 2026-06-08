// Elementos da interface capturados do DOM
const metricUmidade = document.getElementById('metric-umidade');
const msgUmidade = document.getElementById('msg-umidade');

const metricTemp = document.getElementById('metric-temp');
const msgTemp = document.getElementById('msg-temp');

const metricMaquinas = document.getElementById('metric-maquinas');
const msgMaquinas = document.getElementById('msg-maquinas');

const btnSimular = document.getElementById('btn-simular');
const logSimulacao = document.getElementById('log-simulacao');

// Função para gerar números aleatórios simulando sensores IoT reais
function gerarDadosSensores() {
    // Simulação de Umidade (20% a 80%)
    const umidade = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
    metricUmidade.innerText = `${umidade}%`;
    
    if (umidade < 40) {
        msgUmidade.innerText = "⚠️ Solo seco! Irrigação automática recomendada.";
        msgUmidade.style.color = "#d90429";
    } else {
        msgUmidade.innerText = "✅ Nível de umidade ideal para a cultura.";
        msgUmidade.style.color = "#2d6a4f";
    }

    // Simulação de Temperatura (18°C a 36°C)
    const temp = (Math.random() * (36 - 18) + 18).toFixed(1);
    metricTemp.innerText = `${temp} °C`;
    
    if (temp > 32) {
        msgTemp.innerText = "☀️ Evaporação alta monitorada por satélite.";
    } else {
        msgTemp.innerText = "🌤️ Clima estável na região da propriedade.";
    }

    // Simulação de Tratores/Maquinários ativos
    const maquinasAtivas = Math.floor(Math.random() * 5);
    if (maquinasAtivas === 0) {
        metricMaquinas.innerText = "Em pausa";
        msgMaquinas.innerText = "Nenhum maquinário operando em campo agora.";
    } else {
        metricMaquinas.innerText = `${maquinasAtivas} Ativos`;
        msgMaquinas.innerText = "Tratores em rota otimizada via GPS/Telemetria.";
    }
}

// Executa a atualização dos sensores imediatamente ao carregar a página
gerarDadosSensores();

// Atualiza o gêmeo digital automaticamente a cada 4 segundos (Simulação em tempo real)
setInterval(gerarDadosSensores, 4000);

// Evento do botão para simular cenários preditivos com IA
btnSimular.addEventListener('click', () => {
    logSimulacao.innerText = "🤖 Gêmeo Digital rodando projeção de safra para os próximos 30 dias...";
    
    setTimeout(() => {
        const probabilidadeSucesso = Math.floor(Math.random() * (100 - 85 + 1)) + 85;
        logSimulacao.innerText = `📈 Simulação concluída! Eficiência de colheita estimada em ${probabilidadeSucesso}% com base no histórico climático.`;
    }, 2000);
});
