/**
 * BANCO DE DADOS DE SLIDES (slides.js)
 * Defesa de Mestrado PROFMAT - Wesley Oliveira Brum
 * 
 * Instruções para modificação:
 * - Para MUDAR A ORDEM: Altere a posição dos objetos dentro do vetor slidesData.
 * - Para ADICIONAR: Copie um bloco { title, layout, content } e insira na posição desejada.
 * - Para REMOVER: Apague o objeto do slide desejado.
 * 
 * Layouts disponíveis: "title", "default", "two-columns"
 */

const slidesData = [

  // ===================== SLIDE 1: CAPA =====================
  {
    title: "Capa",
    layout: "title",
    content: `
      <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
        <h1 style="font-size: 1.7rem; color: var(--primary); margin: 1rem 0; line-height: 1.3; max-width: 90%;">O CONHECIMENTO ESPECIALIZADO DO PROFESSOR DE MATEMÁTICA NO ENSINO DE LOGARITMOS</h1>
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-medium);">Um Curso de Extensão para a Licenciatura em Matemática</p>
        <p style="margin-top: 1.5rem; font-weight: bold; font-size: 1.1rem;">Wesley Oliveira Brum</p>
        <p style="color: var(--text-light); text-align: center; line-height: 1.6;">Orientadora: Profa. Dra. Daniela Mendes Vieira da Silva<br>Coorientador: Prof. Dr. Marcello Montillo Provenza</p>
        <p style="margin-top: 0.8rem; color: var(--secondary); font-weight: bold;">Rio de Janeiro, 2026</p>
      </div>
    `
  },

  // ===================== SLIDE 2: FLUXOGRAMA =====================
  {
    title: "Visão Geral da Pesquisa",
    layout: "default",
    content: `
      <div class="slide-content slide-fluxo" style="flex: 1; padding: 0; overflow: hidden; display: flex;">
        <iframe 
          src="fluxograma.html" 
          title="Fluxograma da Pesquisa"
          frameborder="0"
          style="width: 100%; height: 100%; border: none;">
        </iframe>
      </div>
    `
  },

  // ===================== SLIDE 3: CONTEXTUALIZAÇÃO =====================
  {
    title: "Contextualização do Problema",
    layout: "default",
    content: `
      <div class="highlight" style="font-size: 1.15rem; text-align: center; margin-bottom: 0.8rem;">"Para que eu preciso estudar isso?"</div>
      <ul style="margin-top: 0.5rem;">
        <li>Ensino tradicional focado em manipulação algébrica e definição inversa da exponencial.</li>
        <li><strong>Obstáculos epistemológicos:</strong> incompreensão do domínio, uso indevido de propriedades, dificuldade de transitar entre registros.</li>
        <li>Irracionalidade apresentada como dado axiomático, sem construção de significado.</li>
        <li>Esvaziamento conceitual e desconexão com fenômenos reais.</li>
      </ul>
      <p style="margin-top: 0.8rem;"><em>Foco: superar o viés procedimental e recuperar a construção de significado.</em></p>
    `
  },

  // ===================== SLIDE 4: PERGUNTA DE PESQUISA =====================
  {
    title: "Pergunta de Pesquisa",
    layout: "default",
    content: `
      <div class="center" style="flex: 1;">
        <blockquote style="max-width: 90%;">
          "Que conhecimentos especializados do professor de matemática devem ser mobilizados para o ensino de logaritmo no Ensino Médio, e de que modo um curso de extensão para licenciandos pode promover a reflexão crítica sobre essas dimensões do saber docente?"
        </blockquote>
        <p style="margin-top: 1rem; color: var(--text-light);">Articulação entre caracterização do saber docente e proposição de espaço formativo.</p>
      </div>
    `
  },

  // ===================== SLIDE 5: OBJETIVOS =====================
  {
    title: "Objetivos",
    layout: "default",
    content: `
      <p><strong>Objetivo Geral:</strong> Caracterizar, com base no MTSK, os conhecimentos especializados para o ensino de logaritmos e desenvolver um curso de extensão para licenciandos.</p>
      <hr>
      <p><strong>Objetivos Específicos:</strong></p>
      <ol>
        <li>Analisar criticamente duas abordagens de introdução ao conceito (inversa vs. área hiperbólica).</li>
        <li>Investigar como a irracionalidade e a análise variacional podem superar obstáculos de aprendizagem.</li>
        <li>Elaborar materiais reflexivos integrando história da matemática, múltiplos registros semióticos e diretrizes da BNCC.</li>
      </ol>
    `
  },

  // ===================== SLIDE 6: MODELOS DE CONHECIMENTO =====================
  {
    title: "Modelos de Conhecimento: Introdução e Evolução",
    layout: "default",
    content: `
      <div class="grid-2">
        <div class="card" style="display: flex; flex-direction: column; justify-content: center;">
          <h3 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 0.8rem; text-align: center;">Por que estudar o conhecimento do professor?</h3>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            <div style="background: rgba(0,51,102,0.05); padding: 0.6rem; border-radius: 6px; border-left: 3px solid var(--primary);">
              <strong>Conhecimento Especializado</strong><br>
              Integra saberes matemáticos, pedagógicos e contextuais, indo além do domínio do conteúdo.
            </div>
            <div style="background: rgba(0,51,102,0.05); padding: 0.6rem; border-radius: 6px; border-left: 3px solid var(--primary);">
              <strong>Superação de Dicotomias</strong><br>
              Fragmentação entre formação específica e pedagógica.
            </div>
            <div style="background: rgba(0,51,102,0.05); padding: 0.6rem; border-radius: 6px; border-left: 3px solid var(--primary);">
              <strong>Prática Reflexiva</strong><br>
              O saber e fazer construído por uma perspectiva técnica, sendo intrinsecamente especializado.
            </div>
          </div>
        </div>
        
        <div class="card" style="background: transparent; border: none; padding: 0;">
          <h3 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 0.8rem; text-align: center;">Evolução dos Modelos</h3>
          <div class="grid-3" style="gap: 0.5rem; margin-top: 0;">
            <div class="card" style="padding: 0.6rem;">
              <div style="text-align: center; margin-bottom: 0.4rem;">
                <strong>1986</strong><br>
                <span class="tag">PCK</span>
              </div>
              <small style="display: block; text-align: center;">
                Lee Shulman<br><br>
                • Transformação do conteúdo<br>
                • Integração conteúdo-pedagogia<br>
                • Modelo amplo e geral
              </small>
            </div>
            <div class="card" style="padding: 0.6rem;">
              <div style="text-align: center; margin-bottom: 0.4rem;">
                <strong>2008</strong><br>
                <span class="tag">MKT</span>
              </div>
              <small style="display: block; text-align: center; font-size: 0.75rem;">
                Ball, Thames & Phelps<br><br>
                • Especificidade p/ matemática<br>
                • Distinção CCK vs. SCK<br>
                • Base empírica
              </small>
            </div>
            <div class="card" style="padding: 0.6rem; border-left-color: var(--secondary);">
              <div style="text-align: center; margin-bottom: 0.4rem;">
                <strong>2013</strong><br>
                <span class="tag">MTSK</span>
              </div>
              <small style="display: block; text-align: center; font-size: 0.75rem;">
                Carrillo<br><br>
                • Todo conhecimento é especializado<br>
                • 6 subdomínios integrados<br>
                • Crenças no centro
              </small>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ===================== SLIDE 7: MODELO MTSK =====================
  {
    title: "O Modelo MTSK e seus Dois Domínios",
    layout: "default",
    content: `
      <div class="grid-2">
        <div style="display: flex; align-items: center; justify-content: center; background: #f8fafc; border-radius: 6px; padding: 0.5rem;">
          <img src="assets/mtsk3.png" alt="Modelo MTSK" style="max-width: 100%; max-height: 100%; object-fit: contain;">
        </div>
        
        <div style="display: flex; flex-direction: column; justify-content: center; gap: 0.8rem;">
          <div class="card" style="padding: 0.8rem;">
            <h3 style="color: var(--primary); font-size: 1rem; margin-bottom: 0.3rem;">Conhecimento Matemático (MK)</h3>
            <p style="font-size: 0.85rem; margin-bottom: 0.4rem;">Conhecimento da disciplina em si, sob a ótica de quem ensina.</p>
            <div style="display: flex; gap: 0.4rem; justify-content: center;">
              <span class="tag">KoT</span> <span class="tag">KSM</span> <span class="tag">KPM</span>
            </div>
          </div>
          
          <div class="card" style="padding: 0.8rem;">
            <h3 style="color: var(--primary); font-size: 1rem; margin-bottom: 0.3rem;">Conhecimento Didático (PCK)</h3>
            <p style="font-size: 0.85rem; margin-bottom: 0.4rem;">Conhecimento sobre como ensinar e aprender matemática.</p>
            <div style="display: flex; gap: 0.4rem; justify-content: center;">
              <span class="tag">KMT</span> <span class="tag">KFLM</span> <span class="tag">KMLS</span>
            </div>
          </div>

          <div class="card" style="padding: 0.8rem; border-left-color: var(--secondary);">
            <h3 style="color: var(--primary); font-size: 1rem; margin-bottom: 0.2rem;">Posição Central das Crenças</h3>
            <p style="font-size: 0.9rem;">Influenciam todas as categorias, dando sentido às ações pedagógicas e filtrando a mobilização dos subdomínios.</p>
          </div>
        </div>
      </div>
    `
  },

  // ===================== SLIDE 8: SUBDOMÍNIOS =====================
  {
    title: "Os Seis Subdomínios do MTSK",
    layout: "default",
    content: `
      <div class="grid-2">
        <div style="padding: 0;">
          <h3 style="color: var(--primary); font-size: 1.05rem; text-align: center; margin-bottom: 0.5rem; border-bottom: 2px solid var(--primary); padding-bottom: 0.3rem;">CONHECIMENTO MATEMÁTICO (MK)</h3>
          <p style="text-align: center; font-size: 0.8rem; color: var(--text-light); margin-bottom: 0.5rem;">Conhecimento da disciplina sob a ótica de quem ensina.</p>
          <div class="grid-3" style="gap: 0.5rem;">
            <div class="card" style="padding: 0.5rem;">
              <div style="text-align: center; margin-bottom: 0.3rem;"><span class="tag">KoT</span></div>
              <strong style="font-size: 0.8rem; display: block; text-align: center; margin-bottom: 0.2rem;">Tópicos Matemáticos</strong>
              <small style="font-size: 0.7rem; line-height: 1.3;">• Conceitos e definições<br>• Propriedades e procedimentos<br>• Exemplos e contraexemplos<br>• Fenomenologia e representações<br>• Aplicações e contextos</small>
            </div>
            <div class="card" style="padding: 0.5rem;">
              <div style="text-align: center; margin-bottom: 0.3rem;"><span class="tag">KSM</span></div>
              <strong style="font-size: 0.8rem; display: block; text-align: center; margin-bottom: 0.2rem;">Estrutura Matemática</strong>
              <small style="font-size: 0.7rem; line-height: 1.3;">• Conexões entre tópicos<br>• Conexões transversais<br>• Ideias principais<br>• Estruturas matemáticas<br>• Unidade do conhecimento</small>
            </div>
            <div class="card" style="padding: 0.5rem;">
              <div style="text-align: center; margin-bottom: 0.3rem;"><span class="tag">KPM</span></div>
              <strong style="font-size: 0.8rem; display: block; text-align: center; margin-bottom: 0.2rem;">Prática Matemática</strong>
              <small style="font-size: 0.7rem; line-height: 1.3;">• Modos de proceder<br>• Raciocínio matemático<br>• Demonstração e prova<br>• Definição formal<br>• Comunicação e padrões</small>
            </div>
          </div>
        </div>
        
        <div style="padding: 0;">
          <h3 style="color: var(--primary); font-size: 1.05rem; text-align: center; margin-bottom: 0.5rem; border-bottom: 2px solid var(--secondary); padding-bottom: 0.3rem;">CONHECIMENTO DIDÁTICO (PCK)</h3>
          <p style="text-align: center; font-size: 0.8rem; color: var(--text-light); margin-bottom: 0.5rem;">Conhecimento sobre como ensinar e aprender.</p>
          <div class="grid-3" style="gap: 0.5rem;">
            <div class="card" style="padding: 0.5rem;">
              <div style="text-align: center; margin-bottom: 0.3rem;"><span class="tag">KMT</span></div>
              <strong style="font-size: 0.8rem; display: block; text-align: center; margin-bottom: 0.2rem;">Ensino de Matemática</strong>
              <small style="font-size: 0.7rem; line-height: 1.3;">• Estratégias de ensino<br>• Tarefas e atividades<br>• Exemplos didáticos<br>• Recursos e materiais<br>• Mediação pedagógica</small>
            </div>
            <div class="card" style="padding: 0.5rem;">
              <div style="text-align: center; margin-bottom: 0.3rem;"><span class="tag">KFLM</span></div>
              <strong style="font-size: 0.8rem; display: block; text-align: center; margin-bottom: 0.2rem;">Características de Aprendizagem</strong>
              <small style="font-size: 0.7rem; line-height: 1.3;">• Como os alunos pensam<br>• Erros comuns<br>• Dificuldades e obstáculos<br>• Teorias de aprendizagem<br>• Empatia cognitiva</small>
            </div>
            <div class="card" style="padding: 0.5rem;">
              <div style="text-align: center; margin-bottom: 0.3rem;"><span class="tag">KMLS</span></div>
              <strong style="font-size: 0.8rem; display: block; text-align: center; margin-bottom: 0.2rem;">Parâmetros de Aprendizagem</strong>
              <small style="font-size: 0.7rem; line-height: 1.3;">• Currículo oficial<br>• Diretrizes (BNCC)<br>• Normas educacionais<br>• Objetivos de aprendizagem<br>• Avaliação institucional</small>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ===================== SLIDE 9: TABELA CAPÍTULOS =====================
  {
    title: "Matemática como Saber Especializado",
    layout: "default",
    content: `
      <div style="display: flex; justify-content: center; align-items: center; flex: 1;">
        <table style="width: 100%;">
          <thead>
            <tr>
              <th>Capítulo da Dissertação</th>
              <th>Módulo do Produto</th>
              <th>Atividade-Chave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cap. 3 (História)</td>
              <td>Módulo 1</td>
              <td>Tábuas de Napier/Briggs & Régua de Cálculo</td>
            </tr>
            <tr>
              <td>Cap. 4 (Função Inversa)</td>
              <td>Módulo 2</td>
              <td>Aproximações Sucessivas para 2ˣ=5</td>
            </tr>
            <tr>
              <td>Cap. 5 (Área Hiperbólica)</td>
              <td>Módulo 3</td>
              <td>Somas Trapezoidais & L(ab)=L(a)+L(b)</td>
            </tr>
            <tr>
              <td>Cap. 8 (Análise Variacional)</td>
              <td>Módulo 4</td>
              <td>Modelagem do Resfriamento do Café (GeoGebra)</td>
            </tr>
            <tr>
              <td>Cap. 6 (BNCC/Cálculo)</td>
              <td>Módulo 5</td>
              <td>Lei de Kleiber, Benford, Richter & C-14</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ===================== SLIDE 10: HISTÓRIA DA MATEMÁTICA =====================
  {
    title: "A História da Matemática como Saber Especializado",
    layout: "default",
    content: `
      <div class="grid-2">
        <div class="card">
          <h3 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 0.6rem;">História da Matemática e o Saber Especializado do Professor</h3>
          <p style="margin-bottom: 0.6rem; font-size: 0.9rem;">
            A história da Matemática não é um mero adereço ou curiosidade: no modelo MTSK, ela integra o <strong>Conhecimento dos Tópicos (KoT)</strong>. Compreender a gênese, a evolução e os usos sociais de um conceito é parte fundamental do saber docente especializado, pois permite ao professor explicar não apenas <em>como</em> se opera, mas <em>por que</em> e <em>para que</em> o conhecimento foi criado.
          </p>
          <div style="background: rgba(0,51,102,0.05); padding: 0.7rem; border-radius: 6px; border-left: 4px solid var(--primary); margin-top: 0.4rem;">
            <strong style="color: var(--primary);">História dos logaritmos:</strong>
            <p style="font-size: 0.85rem; margin-top: 0.3rem;">
              Criados por <strong>John Napier (1614)</strong> e aperfeiçoados por <strong>Henry Briggs</strong> (logaritmos decimais), os logaritmos foram a resposta à necessidade premente de simplificar cálculos astronômicos, náuticos e comerciais no Renascimento. Johannes Kepler declarou que a invenção "dobrou a vida dos astrônomos", ao transformar multiplicações em somas. A régua de cálculo materializou essa ideia por mais de três séculos.
            </p>
          </div>
        </div>
        
        <div class="card">
          <h3 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 0.6rem;">Matemática: Conhecimento Socialmente Construído</h3>
          <p style="margin-bottom: 0.6rem; font-size: 0.9rem;">
            A matemática não é um conhecimento pronto e acabado, mas uma <strong>construção histórica e social</strong>, resultado das necessidades humanas e do desenvolvimento cultural das civilizações. Essa visão está alinhada à BNCC, que preconiza o letramento matemático baseado na compreensão da matemática como linguagem viva e cultural.
          </p>
          <div style="background: rgba(0,51,102,0.05); padding: 0.7rem; border-radius: 6px; border-left: 4px solid var(--secondary); margin-top: 0.4rem;">
            <strong style="color: var(--primary);">Implicações Pedagógicas:</strong>
            <p style="font-size: 0.85rem; margin-top: 0.3rem;">
              A história da matemática é um recurso didático potente para <strong>humanizar a disciplina</strong> e combater o formalismo vazio. No MTSK, esse saber alimenta o <strong>KMT</strong> (estratégias contextualizadas) e o <strong>KFLM</strong> (antecipação de obstáculos), além de dialogar com o <strong>KMLS</strong> (alinhamento à BNCC). O professor que domina a história dos logaritmos pode construir sequências que partem da <em>necessidade</em> do conceito antes de sua formalização algébrica.
            </p>
          </div>
        </div>
      </div>
    `
  },

  // ===================== SLIDE 11: RÉGUA DE CÁLCULO =====================
  {
    title: "Régua de Cálculo: Instrumento Logarítmico",
    layout: "default",
    content: `
<div class="card" style="margin-bottom: 0.5rem; padding: 0.6rem;">
      <div class="grid-2" style="height: 100%; align-items: stretch;">
        <div style="display: flex; flex-direction: column; justify-content: space-between; padding: 0.5rem; border-right: 2px solid var(--primary);">
          <h3 style="color: var(--primary); font-size: 1.2rem; text-align: center; margin-bottom: 0.5rem;">Régua de cálculo</h3>
          <div style="flex: 1; display: flex; align-items: center; justify-content: center; background: #f8fafc; border-radius: 6px; padding: 0.5rem;">
            <img src="assets/fig1.png" alt="Régua de cálculo - escalas logarítmicas" style="max-width: 100%; max-height: 100%; object-fit: contain;">
          </div>
	
          <p style="color: var(--primary); text-align: justify; font-weight: bold; margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.4;">
            Sob a perspectiva histórica, a régua de cálculo materializou as tábuas de logaritmos em um instrumento físico que funcionou como "computador analógico" por quase quatro séculos. Seu funcionamento baseia-se em escalas logarítmicas de espaçamento variável, onde o ato físico de deslizar as réguas realiza a adição de comprimentos, transformando visualmente operações de multiplicação em soma através da propriedade fundamental log(a·b)=log a+log b. Na Atividade 1.2 do produto educacional, esse instrumento é ressignificado didaticamente para conectar o registro algébrico ao geométrico.
          </p>
        </div>
       
        
        <div style="display: flex; flex-direction: column; justify-content: space-between; padding: 0.5rem; gap: 0.4rem;">
          <h4 style="color: var(--primary); font-size: 1.05rem; text-align: center;">Exemplos de uso:</h4>
          <div style="flex: 1; display: flex; flex-direction: column;">
            <h4 style="color: var(--primary); font-size: 0.95rem; margin-bottom: 0.2rem; text-align: center;">Multiplicação e divisão por 12</h4>
            <div style="flex: 1; background: #f8fafc; border-radius: 6px; padding: 0.3rem; display: flex; align-items: center; justify-content: center;">
              <img src="assets/fig2.png" alt="Multiplicação e divisão por 12" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column;">
            <h4 style="color: var(--primary); font-size: 0.95rem; margin-bottom: 0.2rem; text-align: center;">Multiplicação e divisão por 4</h4>
            <div style="flex: 1; background: #f8fafc; border-radius: 6px; padding: 0.3rem; display: flex; align-items: center; justify-content: center;">
              <img src="assets/fig3.png" alt="Multiplicação e divisão por 4" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column;">
            <h4 style="color: var(--primary); font-size: 0.95rem; margin-bottom: 0.2rem; text-align: center;">Encontrando o valor de log(x)</h4>
            <div style="flex: 1; background: #f8fafc; border-radius: 6px; padding: 0.3rem; display: flex; align-items: center; justify-content: center;">
              <img src="assets/fig4.png" alt="Encontrando logaritmo na régua" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
          </div>
        </div>
      </div>
</div>
    `
  },

  // ===================== SLIDE 12: IRRACIONALIDADE =====================
  {
  "title": "Módulo 2: O Problema Epistemológico da Potenciação e a Irracionalidade",
  "layout": "default",
  "content": `
    <div class="grid-2">
      <div>
        <h3 style="color: var(--primary); font-size: 1rem; border-bottom: 2px solid var(--primary); padding-bottom: 0.3rem; margin-bottom: 0.5rem;">A Circularidade Apontada por Elon Lages Lima</h3>
        <div class="card" style="margin-bottom: 0.5rem; border-left-color: var(--secondary); padding: 0.6rem;">
          <p style="font-size: 0.85rem; font-style: italic; line-height: 1.4;">"A definição de logaritmo como expoente só faz sentido pleno quando se tem uma teoria satisfatória das potências de expoente real, o que exige o conceito de limite."</p>
          <small style="display: block; text-align: right; margin-top: 0.3rem; color: var(--text-light);">(LIMA, 2001)</small>
        </div>
        <div class="card" style="margin-bottom: 0.5rem; padding: 0.6rem;">
          <strong style="font-size: 0.9rem;">A Definição Tradicional Falha</strong>
          <p style="font-size: 0.8rem; margin-top: 0.2rem;">No Ensino Fundamental: <em>"O expoente é o número de vezes que a base aparece na multiplicação"</em>. Funciona para $2^3$, mas colapsa:</p>
          <ul style="margin-left: 1rem; margin-top: 0.2rem; font-size: 0.8rem;">
            <li>$2^{1/2}$ → "multiplicar meia vez"?</li>
            <li>$2^{\\sqrt{3}}$ → "multiplicar $\\sqrt{3}$ vezes"?</li>
            <li>$5^{\\pi}$ → "multiplicar $\\pi$ vezes"?</li>
          </ul>
        </div>
        <div class="card" style="padding: 0.6rem;">
          <strong style="font-size: 0.9rem;">Proposta de Refinamento</strong>
          <p style="font-size: 0.8rem; margin-top: 0.2rem;">"A potenciação é a operação que, para expoentes naturais, representa a multiplicação repetida da base, mas que se estende para outros números como uma <strong>transformação de escala contínua</strong>."</p>
        </div>
      </div>
      
      <div>
        <h3 style="color: var(--primary); font-size: 1rem; border-bottom: 2px solid var(--secondary); padding-bottom: 0.3rem; margin-bottom: 0.5rem;">Irracionalidade e Aproximações Sucessivas</h3>
        <div class="card" style="margin-bottom: 0.5rem; padding: 0.6rem;">
          <h4>Mostrando a Irracionalidade (TFA)</h4>
          <p style="font-size: 0.85rem;">Vamos provar que <span class="formula">$\\log_2 5$</span> não é racional usando o Teorema Fundamental da Aritmética.</p>
          <div class="proof-steps">
            <p>1. Suponha que <span class="formula">$\\log_2 5 = \\frac{p}{q}$</span> (racional).</p>
            <p>2. Pela definição: <span class="formula">$2^{p/q} = 5$</span>.</p>
            <p>3. Elevando à potência <em>q</em>:</p>
            <p class="highlight-equation formula">$$2^p = 5^q$$</p>
            <p>4. <strong>Contradição:</strong> O lado esquerdo é par, o direito é ímpar.</p>
            <p class="conclusion">Logo, <span class="formula">$\\log_2 5$</span> <strong>não é racional</strong>.</p>
          </div>
        </div>
        <div class="card" style="border-left-color: var(--secondary); padding: 0.6rem;">
          <strong style="font-size: 0.9rem;">Atividade: Aproximações Sucessivas para $2^x = 5$</strong>
          <ul style="margin-left: 1rem; margin-top: 0.3rem; font-size: 0.78rem; line-height: 1.4;">
            <li><strong>1º:</strong> $2^2 = 4$ e $2^3 = 8$, logo $x \\in (2, 3)$</li>
            <li><strong>2º:</strong> Testar $2^{2,1}$, $2^{2,2}$, $2^{2,3}$, $2^{2,4}$</li>
            <li><strong>3º:</strong> Refinar: $2^{2,31}$, $2^{2,32}$, $2^{2,33}$</li>
            <li><strong>4º:</strong> Visualizar no GeoGebra a interseção $y = 2^x$ e $y = 5$</li>
          </ul>
          <div class="highlight" style="margin-top: 0.3rem; font-size: 0.78rem;">
            <strong>Conclusão:</strong> Nenhum decimal finito satisfaz $2^x = 5$ → o expoente é irracional → justifica-se <span class="formula">$\\log_2(5)$</span>.
          </div>
        </div>
      </div>
    </div>
  `
},

  // ===================== SLIDE 13: GEOGEBRA 1 =====================
  {
    title: "Exploração Interativa - GeoGebra",
    layout: "default",
    content: `
      <div class="slide-geogebra-content" style="flex: 1;">
        <div class="geogebra-wrapper">
          <iframe 
            src="https://www.geogebra.org/calculator/nwpgs66a?embed" 
            width="100%" 
            height="100%" 
            allowfullscreen 
            style="border: none;" 
            frameborder="0">
          </iframe>
        </div>
      </div>
    `
  },

  // ===================== SLIDE 14: TRANSFORMAÇÃO DE ÁREA =====================
  {
    title: "Transformação de Área: T(x,y) = (kx, y/k)",
    layout: "default",
     content: `
      <div style="flex: 1; padding: 0; overflow: hidden; display: flex;">
        <iframe 
          src="https://www.geogebra.org/calculator/saktmmxk?embed" 
          style="width: 100%; height: 100%; border: none; display: block;" 
          allowfullscreen 
          frameborder="0">
        </iframe>
      </div>
    `
  },

 // ===================== SLIDE 142: TRANSFORMAÇÃO DE ÁREA =====================
{
  "title": "Módulo 3: O Logaritmo como Área sob a Hipérbole",
  "layout": "default",
  "content": `
    <div class="grid-2">
      <div>
        <h3 style="color: var(--primary); font-size: 1rem; border-bottom: 2px solid var(--primary); padding-bottom: 0.3rem; margin-bottom: 0.5rem;">O Desafio Epistemológico e a Solução Didática</h3>
        <div class="card" style="margin-bottom: 0.5rem; border-left-color: var(--secondary); padding: 0.6rem;">
          <strong style="font-size: 0.9rem;">A Barreira do Cálculo Formal</strong>
          <p style="font-size: 0.8rem; margin-top: 0.2rem;">A definição clássica do logaritmo natural como <span class="formula">$\\ln(x) = \\int_{1}^{x} \\frac{1}{t} dt$</span> exige conhecimentos de Cálculo Integral e limites formais, criando um obstáculo intransponível para a introdução rigorosa do tema no Ensino Médio.</p>
        </div>
        <div class="card" style="padding: 0.6rem; background-color: rgba(0,0,0,0.02);">
          <strong style="font-size: 0.9rem;">A Solução: Noção Intuitiva de Limite</strong>
          <p style="font-size: 0.8rem; margin-top: 0.2rem;">A proposta contorna essa dificuldade utilizando <strong>somas trapezoidais dinâmicas no GeoGebra</strong>. Ao aumentar o número de partições ($n$), o aluno visualiza a convergência da área aproximada para um valor fixo. Isso constrói uma <strong>noção intuitiva de limite</strong> e acumulação, dispensando o formalismo analítico, mas preservando o rigor conceitual (mobilizando KoT e KSM).</p>
        </div>
      </div>
      
      <div>
        <h3 style="color: var(--primary); font-size: 1rem; border-bottom: 2px solid var(--secondary); padding-bottom: 0.3rem; margin-bottom: 0.5rem;">As Atividades Investigativas do Módulo</h3>
        <div class="card" style="margin-bottom: 0.5rem; padding: 0.6rem;">
          <strong style="font-size: 0.9rem;">Atividade 1: Descobrindo a Área e o Número $e$</strong>
          <p style="font-size: 0.8rem; margin-top: 0.2rem;">O licenciando manipula o número de trapézios para aproximar a área sob <span class="formula">$y = \\frac{1}{x}$</span>. O desafio inverso (encontrar $x$ tal que a área seja 1) leva à descoberta empírica e significativa da constante de Euler ($e \\approx 2,718$).</p>
        </div>
        <div class="card" style="margin-bottom: 0.5rem; padding: 0.6rem;">
          <strong style="font-size: 0.9rem;">Atividade 2: Caracterização Geométrica $L(ab) = L(a) + L(b)$</strong>
          <p style="font-size: 0.8rem; margin-top: 0.2rem;">Uso da transformação linear <span class="formula">$T(x,y) = (kx, \\frac{y}{k})$</span>, que preserva áreas. O aluno "desloca" visualmente a área de $[1, a]$ para o intervalo $[b, ab]$, provando geometricamente, sem álgebra complexa, a propriedade fundamental do produto.</p>
        </div>
        <div class="card" style="padding: 0.6rem;">
          <strong style="font-size: 0.9rem;">Atividade 3: Potências e Mudança de Base</strong>
          <p style="font-size: 0.8rem; margin-top: 0.2rem;">Exploração da família de hipérboles <span class="formula">$y = \\frac{k}{x}$</span>. Visualiza-se que esticar a curva verticalmente multiplica a área por $k$, deduzindo <span class="formula">$L(a^k) = k \\cdot L(a)$</span> e compreendendo a mudança de base não como uma fórmula mágica, mas como uma conversão de escalas: .</p>
        </div>
      </div>
    </div>
  `
},

  // ===================== SLIDE 15: GEOGEBRA - ÁREA =====================
  {
    title: "Módulo 4: Exploração Interativa Para Definir L(a) Como Área no GeoGebra",
    layout: "default",
    content: `
      <div style="flex: 1; padding: 0; overflow: hidden; display: flex;">
        <iframe 
          src="https://www.geogebra.org/calculator/cawamavj?embed" 
          style="width: 100%; height: 100%; border: none; display: block;" 
          allowfullscreen 
          frameborder="0">
        </iframe>
      </div>
    `
  },

  // ===================== SLIDE 16: GEOGEBRA 3 =====================
  {
    title: "Exploração Interativa - GeoGebra",
    layout: "default",
    content: `
      <div style="flex: 1; padding: 0; overflow: hidden; display: flex;">
        <iframe 
          src="https://www.geogebra.org/calculator/hzuyqsgt?embed" 
          style="width: 100%; height: 100%; border: none; display: block;" 
          allowfullscreen 
          frameborder="0">
        </iframe>
      </div>
    `
  },

  // ===================== SLIDE 17: ANÁLISE VARIACIONAL =====================
  {
    title: "Módulo 4: Análise Variacional – Do Padrão à Modelagem",
    layout: "default",
    content: `
       
  
    
       </div>
    <div class="slide-content">
      <div class="grid-2">
        
        <!-- COLUNA 1: Importância do Comportamento Variacional (Expandida) -->
        <div>
          <h3 style="color: var(--primary); font-size: 1.1rem; border-bottom: 2px solid var(--primary); padding-bottom: 0.3rem; margin-bottom: 0.6rem;">
             A Essência Variacional das Funções
          </h3>
          
          <div class="card" style="margin-bottom: 0.6rem; border-left-width: 5px;">
            <strong style="font-size: 1rem; color: var(--primary);">1. A Simetria Operacional (Inversão)</strong>
            <p style="font-size: 0.85rem; margin-top: 0.3rem; line-height: 1.4;">
              A análise variacional revela a <strong>essência da relação de inversão</strong> entre exponencial e logarítmica, não pela manipulação algébrica, mas pelo modo como cada uma reage a mudanças no domínio:
            </p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.4rem;">
              <div style="background: rgba(0,51,102,0.05); padding: 0.5rem; border-radius: 6px; border-left: 3px solid var(--primary);">
                <strong style="font-size: 0.85rem;"> Exponencial</strong><br>
                <small style="font-size: 0.75rem;">Adição no domínio → Multiplicação na imagem</small><br>
                <span class="formula" style="font-size: 0.8rem; display: block; margin-top: 0.2rem;">f(x+h) = f(x) · aʰ</span>
              </div>
              <div style="background: rgba(0,51,102,0.05); padding: 0.5rem; border-radius: 6px; border-left: 3px solid var(--secondary);">
                <strong style="font-size: 0.85rem;">Logarítmica</strong><br>
                <small style="font-size: 0.75rem;">Multiplicação no domínio → Adição na imagem</small><br>
                <span class="formula" style="font-size: 0.8rem; display: block; margin-top: 0.2rem;">g(x·h) = g(x) + logₐ(h)</span>
              </div>
            </div>
          </div>

          <div class="card" style="border-left-width: 5px;">
            <strong style="font-size: 1rem; color: var(--primary);">2. Taxa de Variação Relativa Constante</strong>
            <p style="font-size: 0.85rem; margin-top: 0.3rem; line-height: 1.4;">
              A exponencial é a única família de funções em que <strong>incrementos iguais no domínio produzem fatores multiplicativos constantes na imagem</strong>. 
            </p>
            <div class="highlight" style="margin-top: 0.4rem; font-size: 0.8rem; width: 100%; box-sizing: border-box;">
              <strong>"Impressão Digital" do Crescimento/Decaimento:</strong> A razão entre um ponto e o anterior é constante (<span class="formula">f(x+h)/f(x) = aʰ</span>). Isso independe de onde se está (valor de x) e depende apenas do tamanho do passo (h). É a base para modelar fenômenos reais.
            </div>
            <p style="font-size: 0.8rem; margin-top: 0.4rem; color: var(--text-light);">
              <span class="tag">KoT</span> Fenomenologia &nbsp; <span class="tag">KSM</span> Discreto ↔ Contínuo
            </p>
          </div>
        </div>
        
        <!-- COLUNA 2: Atividade 1 do Módulo 4 (Com a Tabela Real) -->
        <div>
          <h3 style="color: var(--primary); font-size: 1.1rem; border-bottom: 2px solid var(--secondary); padding-bottom: 0.3rem; margin-bottom: 0.6rem;">
            Atividade 1: Resfriamento do Café
          </h3>

          <div class="card" style="margin-bottom: 0.5rem; padding: 0.6rem;">
            <strong style="font-size: 0.9rem;">Problema Disparador</strong>
            <p style="font-size: 0.8rem; margin-top: 0.2rem; line-height: 1.3;">
              Um café a <strong>90,0°C</strong> é deixado em ambiente a <strong>20,0°C</strong>. A temperatura é registrada a cada 2 minutos. <strong>Qual modelo descreve esse decaimento?</strong>
            </p>
          </div>

          <div class="card" style="margin-bottom: 0.5rem; padding: 0.5rem;">
            <strong style="font-size: 0.9rem; display: block; margin-bottom: 0.3rem;">📋 Tabela de Dados (Apresentada ao Cursista)</strong>
            <div style="overflow-y: auto; max-height: 180px; border: 1px solid #eee; border-radius: 4px;">
              <table style="font-size: 0.7rem; margin-top: 0;">
                <thead>
                  <tr style="background: var(--primary); color: white;">
                    <th style="padding: 0.3rem;">t (min)</th>
                    <th style="padding: 0.3rem;">T(t) °C</th>
                    <th style="padding: 0.3rem;">T(t) - 20</th>
                    <th style="padding: 0.3rem;">Razão</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>0</td><td>90,00</td><td>70,00</td><td>0,85</td></tr>
                  <tr><td>2</td><td>79,65</td><td>59,65</td><td>0,85</td></tr>
                  <tr><td>4</td><td>70,83</td><td>50,83</td><td>0,85</td></tr>
                  <tr><td>6</td><td>63,31</td><td>43,31</td><td>0,85</td></tr>
                  <tr><td>8</td><td>56,91</td><td>36,91</td><td>0,85</td></tr>
                  <tr><td>10</td><td>51,45</td><td>31,45</td><td>0,85</td></tr>
                  <tr><td>12</td><td>46,80</td><td>26,80</td><td>0,85</td></tr>
                  <tr><td>14</td><td>42,84</td><td>22,84</td><td>0,85</td></tr>
                  <tr><td>16</td><td>39,46</td><td>19,46</td><td>0,85</td></tr>
                  <tr><td>18</td><td>36,58</td><td>16,58</td><td>0,85</td></tr>
                  <tr><td>20</td><td>34,13</td><td>14,13</td><td>0,85</td></tr>
                  <tr><td>22</td><td>32,04</td><td>12,04</td><td>0,85</td></tr>
                  <tr><td>24</td><td>30,26</td><td>10,26</td><td>0,85</td></tr>
                  <tr><td>26</td><td>28,75</td><td>8,75</td><td>0,85</td></tr>
                  <tr><td>28</td><td>27,45</td><td>7,45</td><td>—</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="card" style="border-left-color: var(--secondary); padding: 0.6rem;">
            <strong style="font-size: 0.9rem;"> A Descoberta Empírica (O "Pulo do Gato")</strong>
            <p style="font-size: 0.8rem; margin-top: 0.2rem; line-height: 1.3;">
              Ao calcular as razões <span class="formula">T(t+2)/T(t)</span>, o cursista percebe que <strong>não são constantes</strong> (pois T(t) tende a 20°C). Mas ao ajustar para a diferença <span class="formula">(T(t+2) − 20)/(T(t) − 20)</span>, a razão se estabiliza em <strong>≈ 0,85</strong>.
            </p>
            <div class="highlight" style="margin-top: 0.3rem; font-size: 0.75rem; width: 100%; box-sizing: border-box;">
              <strong>Conclusão:</strong> O decaimento é exponencial, mas da <em>diferença</em> T(t) − T<sub>amb</sub>, não de T(t) isoladamente.
            </div>
            <p style="font-size: 0.75rem; margin-top: 0.3rem; color: var(--text-light);">
              <span class="tag">KoT</span> Fenomenologia &nbsp; <span class="tag">KMT</span> GeoGebra &nbsp; <span class="tag">KFLM</span> Empatia cognitiva
            </p>
          </div>
        </div>

      </div>
      
      </div>
    `
  },

  // ===================== SLIDE 19: MAPEAMENTO MTSK =====================
 {
  "title": "Atividade 2: Resfriamento do Café - Modelagem com Dados Reais (Vídeo-Análise)",
  "layout": "default",
  "content": `
    <div class="grid-2">
      <div>
        <div class="card" style="margin-bottom: 0.8rem; padding: 0.8rem; border-left: 4px solid var(--primary);">
          <h4 style="color: var(--primary); font-size: 0.95rem; margin-bottom: 0.5rem;">O Experimento</h4>
          <p style="font-size: 0.85rem; line-height: 1.5; margin-bottom: 0.5rem;">
            O experimento consiste no monitoramento do resfriamento de uma amostra de café. Para a coleta, utilizou-se um termômetro digital com sonda (precisão de <span class="formula">$\\pm 0,5^\\circ$C</span>) acoplado a um <em>smartphone</em>, enquanto um segundo aparelho registrava o processo em vídeo para posterior análise.
          </p>
          <p style="font-size: 0.85rem; line-height: 1.5;">
            <strong>Temperatura ambiente registrada:</strong> <span class="formula">$T_{amb} = 25,8^{\\circ}C$</span>
          </p>
        </div>
        
        <div class="card" style="margin-bottom: 0.8rem; padding: 0.8rem; background-color: rgba(0,0,0,0.03);">
          <h4 style="color: var(--secondary); font-size: 0.95rem; margin-bottom: 0.5rem;">Instruções para Coleta de Dados</h4>
          <ol style="font-size: 0.85rem; line-height: 1.6; margin-left: 1.2rem;">
            <li style="margin-bottom: 0.4rem;">Assista ao vídeo do experimento disponível no link fornecido.</li>
            <li style="margin-bottom: 0.4rem;">Colete a temperatura a cada intervalo de tempo constante <span class="formula">$\\Delta t$</span> (conforme orientação do professor ou escolha do grupo).</li>
            <li style="margin-bottom: 0.4rem;">Preencha a tabela com os valores de tempo <span class="formula">$t$</span> (min) e temperatura <span class="formula">$T(t)$</span> (°C).</li>
            <li style="margin-bottom: 0.4rem;">Calcule <span class="formula">$T(t) - T_{amb}$</span> para cada instante.</li>
            <li style="margin-bottom: 0.4rem;">Determine as razões <span class="formula">$\\frac{T(t+\\Delta t) - T_{amb}}{T(t) - T_{amb}}$</span>.</li>
          </ol>
        </div>
        
        <div class="highlight" style="padding: 0.6rem; border-left: 3px solid var(--secondary); font-size: 0.8rem;">
          <strong>Objetivo:</strong> Construir um modelo matemático que descreva o resfriamento do café e validar a Lei de Resfriamento de Newton através da análise dos dados experimentais.
        </div>
      </div>
      
      <div>
        <div class="card" style="padding: 0.6rem; text-align: center;">
          <h4 style="color: var(--primary); font-size: 0.95rem; margin-bottom: 0.6rem;">Vídeo do Experimento</h4>
          <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background-color: #000; border-radius: 8px;">
            <iframe 
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;"
              src="https://www.youtube.com/embed/-m-g-vyhWj8" 
              title="Experimento Resfriamento do Café" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <p style="font-size: 0.75rem; margin-top: 0.5rem; color: var(--text-light);">
            <a href="https://www.youtube.com/watch?v=-m-g-vyhWj8" target="_blank" style="color: var(--primary);">Assistir no YouTube</a>
          </p>
        </div>
        
        <div class="card" style="margin-top: 0.8rem; padding: 0.8rem; border-left-color: var(--secondary);">
          <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem;">Aspectos da Modelagem</h4>
          <ul style="font-size: 0.8rem; line-height: 1.6; margin-left: 1rem;">
            <li><strong>Lei de Newton:</strong> <span class="formula">$T(t) = T_{amb} + (T_0 - T_{amb})e^{-kt}$</span></li>
            <li><strong>Análise das razões:</strong> Verificar se são aproximadamente constantes</li>
            <li><strong>Erro instrumental:</strong> Considerar <span class="formula">$\\pm 0,5^\\circ$C</span> nas medições</li>
            <li><strong>Ajuste no GeoGebra:</strong> Comparar modelo teórico com dados reais</li>
          </ul>
        </div>
        
        <div class="card" style="margin-top: 0.8rem; padding: 0.6rem; background-color: rgba(0,0,0,0.02);">
          <p style="font-size: 0.8rem; line-height: 1.5; margin: 0;">
            <strong>Reflexão:</strong> Como os dados experimentais se comparam com o modelo teórico? Que fatores podem explicar eventuais desvios?
          </p>
        </div>
      </div>
    </div>
  `
},
{
  "title": "Conclusão – O que foi realizado",
  "layout": "default",
  "content": `
<div class="card" style="border-left-color: var(--secondary); padding: 0.6rem;">
    <div style="text-align: center; padding: 1rem; display: flex; flex-direction: column; justify-content: center; height: 100%;">
      <p style="font-size: 0.9rem; line-height: 1.6; text-align: justify;">
        A pesquisa caracterizou, à luz do modelo <strong>MTSK</strong>, o conhecimento especializado necessário para o ensino de logaritmos, mapeando subdomínios como <strong>KoT, KSM, KMT, KFLM, KMLS</strong> e <strong>KPM</strong>. 
      </p>
      <p style="font-size: 0.9rem; line-height: 1.6; text-align: justify; margin-top: 0.5rem;">
        Foram analisadas criticamente duas abordagens de introdução do conceito – a inversa da exponencial e a área sob a hipérbole – comparando suas bases epistemológicas e viabilidade didática. Investigou-se a irracionalidade de muitos logaritmos e a análise variacional das funções exponencial e logarítmica, conectando esses temas à modelagem de fenômenos reais. 
      </p>
      <p style="font-size: 0.9rem; line-height: 1.6; text-align: justify; margin-top: 0.5rem;">
        Como resultado, estruturou-se um curso de extensão de cinco módulos reflexivos, com tarefas investigativas, história da matemática, múltiplos registros de representação e uso de GeoGebra, incorporando diretamente os conhecimentos especializados mapeados.
      </p>
    </div>
 </div>

  `
},
{
  "title": "Conclusão – Limitação e agenda de pesquisa",
  "layout": "default",
  "content": `
    <div style="padding: 1rem;">
      <div class="card" style="margin-bottom: 1rem; border-left: 4px solid var(--secondary); background-color: rgba(0,0,0,0.03); padding: 0.8rem;">
        <p style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
          O curso de extensão foi <strong>estruturado e fundamentado teoricamente</strong>, mas <strong>não foi aplicado empiricamente</strong> com licenciandos ou professores da educação básica no âmbito desta dissertação. Não há coleta de dados observacionais ou de intervenção.
        </p>
      </div>
      
      <h4 style="color: var(--primary); font-size: 0.95rem; margin-bottom: 0.6rem; border-bottom: 1px solid var(--primary); padding-bottom: 0.3rem;">
        Desdobramentos futuros (agenda de pesquisa):
      </h4>
      <ul style="font-size: 0.8rem; line-height: 1.5; margin-left: 1.2rem; color: var(--text);">
        <li style="margin-bottom: 0.4rem;"><strong>Aplicação piloto:</strong> do curso em turmas de licenciatura (disciplinas de prática docente ou estágio) com avaliação pré/pós para mensurar a mobilização do MTSK.</li>
        <li style="margin-bottom: 0.4rem;"><strong>Adaptação modular:</strong> da estrutura para outros tópicos estruturantes: funções exponenciais, trigonometria, progressões.</li>
        <li style="margin-bottom: 0.4rem;"><strong>Investigação de crenças:</strong> da interseção entre as <strong>crenças do professor</strong> e a mobilização efetiva dos subdomínios do MTSK na prática cotidiana.</li>
        <li><strong>Estudos longitudinais:</strong> que avaliem o impacto dessa formação na aprendizagem e retenção conceitual de alunos do Ensino Médio.</li>
      </ul>
    </div>
  `
},
{
  "title": "Agradecimentos",
  "layout": "default",
  "content": `
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; text-align: center; padding: 1.5rem;">
      <p style="font-size: 0.95rem; margin-bottom: 1rem; line-height: 1.4;">
        Aos meus orientadores, <strong>Profa. Daniela Vieira</strong> e <strong>Prof. Marcello Provenza</strong>, pela paciência e rigor.
      </p>
      <p style="font-size: 0.95rem; margin-bottom: 1rem; line-height: 1.4;">
        Aos companheiros do grupo <strong>“Me salva Profmat”</strong> – Anderson, Ângelo, Jefferson e Lígia – a culpa por qualquer acerto é inteiramente de vocês.
      </p>
      <p style="font-size: 0.95rem; margin-bottom: 1rem; line-height: 1.4;">
        À minha esposa <strong>Évile</strong>: sem a tranquilidade que ela proporciona na minha vida, esse sonho não teria sido realizado.
      </p>
      <p style="font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.4;">
        À UERJ e ao PROFMAT, pela oportunidade de construir um produto educacional com base sólida.
      </p>
      <h2 style="color: var(--primary); font-size: 2rem; margin-top: 1rem; font-weight: bold;">Obrigado!</h2>
    </div>
  `
},
{
  "title": "Referências Principais",
  "layout": "default",
  "content": `
    <div style="padding: 1rem;">
      <ul style="font-size: 0.75rem; line-height: 1.5; margin-left: 1rem; color: var(--text);">
        <li style="margin-bottom: 0.6rem;">
          BALL, D. L.; THAMES, M. H.; PHELPS, G. Content knowledge for teaching. <em>Journal of Teacher Education</em>, 2008.
        </li>
        <li style="margin-bottom: 0.6rem;">
          CARRILLO, J. et al. The Mathematics Teacher's Specialised Knowledge (MTSK) Model. 2013.
        </li>
        <li style="margin-bottom: 0.6rem;">
          LIMA, E. L. <em>Logaritmos</em>. Rio de Janeiro: SBM, 2001.
        </li>
        <li style="margin-bottom: 0.6rem;">
          SHULMAN, L. S. Those who understand: Knowledge growth in teaching. <em>Educational Researcher</em>, 1986.
        </li>
        <li style="margin-bottom: 0.6rem;">
          DUVAL, R. <em>Registros de representação semiótica</em>. Campinas: Papirus, 2003.
        </li>
        <li style="margin-bottom: 0.6rem;">
          EVES, H. <em>Introdução à História da Matemática</em>. 1992.
        </li>
      </ul>
    </div>
  `
},

  // ===================== SLIDES 20-25: PLACEHOLDER =====================
  // NOTA: Os slides 20 a 25 do seu HTML original foram truncados no envio.
  // Cole o conteúdo deles aqui seguindo o mesmo formato acima.
  // Exemplo:
  // {
  //   title: "Título do Slide 20",
  //   layout: "default",
  //   content: `<div>Conteúdo HTML aqui</div>`
  // },

];
