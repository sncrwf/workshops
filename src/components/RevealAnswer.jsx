import React, { useState } from 'react';

export default function RevealWithPassword() {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const correctPassword = 'snow'; // você pode trocar para 'melhorcomservicenow' se quiser

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div style={{ marginTop: '2em', padding: '1em', background: '#f9f9f9', borderRadius: '8px' }}>
      {!unlocked ? (
        <form onSubmit={handleSubmit}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5em' }}>
            Digite a senha para revelar as hipóteses sobre a mudança de processo:
          </label>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              padding: '0.5em',
              width: '250px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '1em',
              marginBottom: '0.5em'
            }}
            placeholder="Digite a senha aqui"
          />
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: '#0052cc',
              color: 'white',
              padding: '0.5em 1.2em',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Ver hipóteses
          </button>
          {error && (
            <p style={{ color: 'red', marginTop: '0.5em' }}>Senha incorreta. Tente novamente.</p>
          )}
        </form>
      ) : (
        <div>
          <strong>📊 Hipóteses e insights sobre a mudança de processo:</strong>

          <ol style={{ lineHeight: '1.8em' }}>
            <li>
              ✅ <strong>Simplificação do processo:</strong><br />
              Com a remoção da etapa <code>Assigned</code> e adoção do direcionamento automático via AWA, o número de rotas únicas foi reduzido de <strong>905</strong> para <strong>519</strong>.  
              Essa simplificação indica menor variabilidade nos caminhos e maior padronização da jornada.
            </li>
            <li>
              ✅ <strong>Redução da variabilidade:</strong><br />
              O desvio padrão do tempo de resolução caiu de <strong>1 mês e 1 dia</strong> para <strong>1 semana e 3 dias</strong>, o que sugere maior previsibilidade no atendimento após a automação e estruturação do fluxo.
            </li>
            <li>
              ✅ <strong>Menor volume processado:</strong><br />
              O total de registros caiu de <strong>2.4k</strong> para <strong>1.1k</strong>.  
              Essa diferença pode estar relacionada ao refinamento do escopo de análise, com exclusão de tickets resolvidos automaticamente ou via autoatendimento.
            </li>
            <li>
              ✅ <strong>Redistribuição entre canais de entrada:</strong><br />
              Após a reformulação do intake e a adoção de interfaces estruturadas com Virtual Agent, o canal <code>Portal</code> cresceu de 6 para 577 registros, enquanto <code>Self-service</code> caiu de 1.7k para 135.  
              Isso sugere uma mudança proposital na jornada de abertura e maior uso de mecanismos de autoatendimento.
            </li>
            <li>
              ⚠️ <strong>Aumento discreto no tempo mediano:</strong><br />
              A mediana aumentou de <strong>1 semana e 18h</strong> para <strong>1 semana e 20h</strong>.  
              Pode indicar que, ao excluir os casos mais simples do escopo, os chamados restantes apresentam maior complexidade média.
            </li>
            <li>
              ⚠️ <strong>Mudança no modelo de visibilidade operacional:</strong><br />
              Com a remoção da etapa de atribuição manual, a responsabilidade pelos chamados passou a ser controlada automaticamente via AWA.  
              Isso exige uma nova abordagem por parte dos gestores para acompanhar filas e alocações, utilizando dashboards e mecanismos integrados de monitoramento.
            </li>
          </ol>

          <p style={{ marginTop: '1em' }}>
            💡 <em>Estes pontos ajudam a entender não apenas o impacto direto da mudança, mas também possíveis efeitos colaterais.  
            O <strong>Process Mining da ServiceNow</strong> permite esse tipo de análise com clareza e profundidade.</em>
          </p>
        </div>
      )}
    </div>
  );
}