import Link from "next/link";
import { JSX } from "react";
import styles from "./polices.module.css";

const PrivacyPolicy = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <div className={styles.slider}>
        <hr />
        <div className={styles.container}>
          <article>
            <header>
              <h1>Política de Privacidade</h1>
            </header>

            <section>
              <p>
                Bem-vindo ao <strong>mayconalves.com</strong>. Esta Política de
                Privacidade explica como coletamos, usamos e protegemos as
                informações pessoais dos visitantes. Ao usar o site, você
                concorda com as práticas descritas aqui.
              </p>
            </section>

            <section>
              <h2>1. Coleta de informações</h2>
              <p>Coletamos dados de duas formas:</p>
              <p>
                <strong>Fornecidos voluntariamente:</strong> nome, e-mail e
                outras informações que você optar por enviar (contato,
                comentários, assinatura de newsletter).
              </p>
              <p>
                <strong>Coletados automaticamente:</strong> dados técnicos (IP
                anonimizados, tipo de navegador, páginas acessadas, origem de
                tráfego) por ferramentas de análise.
              </p>
            </section>

            <section>
              <h2>2. Uso das informações</h2>
              <p>
                Utilizamos as informações para melhorar o conteúdo e a
                experiência do site, enviar comunicações quando solicitadas,
                analisar métricas e manter a segurança da plataforma.
              </p>
              <p>
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com
                terceiros para fins comerciais. Podemos compartilhar dados
                quando exigido por lei ou para proteger nossos direitos legais.
              </p>
            </section>

            <section>
              <h2>3. Cookies</h2>
              <p>
                O site pode usar cookies e tecnologias semelhantes para lembrar
                preferências, analisar uso e melhorar a experiência. Você pode
                desativar cookies nas configurações do seu navegador, porém isso
                pode impactar funcionalidades.
              </p>
            </section>

            <section>
              <h2>4. Links externos</h2>
              <p>
                O site pode conter links para recursos externos. Não nos
                responsabilizamos pelas práticas de privacidade desses sites.
                Recomendamos ler as políticas de privacidade de terceiros antes
                de fornecer informações.
              </p>
            </section>

            <section>
              <h2>5. Segurança</h2>
              <p>
                Adotamos medidas técnicas e administrativas razoáveis para
                proteger os dados. Contudo, nenhum sistema é totalmente à prova
                de falhas; assim, não podemos garantir segurança absoluta em
                todas as situações.
              </p>
            </section>

            <section>
              <h2>6. Direitos do titular (LGPD)</h2>
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD),
                você pode solicitar:
              </p>
              <p>Confirmação da existência de tratamento de dados;</p>
              <p>
                Correção, aceeso, portabilidade ou exclusão dos seus dados
                pessoais;
              </p>
              <p>Revogação do consentimento quando aplicável.</p>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas, entre em
                contato pelo e‑mail:
                <a href="mailto:mayconbalves1@gmail.com">
                  {" "}
                  mayconbalves1@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2>7. Alterações nesta política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade ocasionalmente. A
                data da última atualização será indicada no topo. Recomendamos
                revisar esta página periodicamente.
              </p>
            </section>

            <section>
              <h2>8. Contato</h2>
              <p>
                Se tiver dúvidas, entre em contato por e‑mail:
                <a href="mailto:mayconbalves1@gmail.com">
                  {" "}
                  mayconbalves1@gmail.com
                </a>
              </p>
            </section>

            <footer>
              <div className={styles.container_copyright}>
                <p>
                  © 2025 Maycon Alves -
                  <Link href="/polices"> Políticas de Privacidade</Link>
                </p>
              </div>
            </footer>
          </article>
        </div>
        <hr />
      </div>
    </main>
  );
};

export default PrivacyPolicy;
