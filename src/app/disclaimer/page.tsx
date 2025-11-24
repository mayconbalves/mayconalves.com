import Link from "next/link";
import { JSX } from "react";
import styles from "./disclaimer.module.css";

export const metadata = {
  title: "Disclaimer e Publicidade | Maycon Alves",
  description:
    "Informações sobre publicidade, direitos autorais e responsabilidades do site mayconalves.com",
  alternates: {
    canonical: "https://mayconalves.com/disclaimer",
  },
};

const Disclaimer = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <div className={styles.slider}>
        <hr />
        <div className={styles.container}>
          <article>
            <header>
              <h1>Disclaimer e Publicidade</h1>
              <p className={styles.lastUpdate}>
                Última atualização: Janeiro de 2025
              </p>
            </header>

            <section>
              <h2>📢 Sobre a Publicidade</h2>
              <p>
                Este site exibe anúncios através do{" "}
                <strong>Google AdSense</strong>, um serviço de publicidade
                fornecido pela Google. Os anúncios exibidos são selecionados
                automaticamente com base no conteúdo do site e nos interesses
                dos visitantes.
              </p>
              <p>
                A exibição de anúncios ajuda a manter este blog gratuito e
                permite que eu continue produzindo conteúdo de qualidade sobre
                desenvolvimento web e tecnologia.
              </p>
            </section>

            <section>
              <h2>🍪 Cookies e Dados de Terceiros</h2>
              <p>
                O Google AdSense utiliza cookies para personalizar anúncios com
                base nos seus interesses. Estes cookies não coletam informações
                pessoais identificáveis.
              </p>
              <p>
                Você pode gerenciar suas preferências de anúncios visitando a
                página de{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Configurações de Anúncios do Google
                </a>
                .
              </p>
            </section>

            <section>
              <h2>✍️ Conteúdo Original</h2>
              <p>
                Todo o conteúdo publicado neste site é{" "}
                <strong>original e de minha autoria</strong>, baseado em minha
                experiência profissional como desenvolvedor front-end desde
                2017.
              </p>
              <p>
                Alguns artigos podem ter versões publicadas em outras
                plataformas (como Medium), mas este site (
                <strong>mayconalves.com</strong>) é a{" "}
                <strong>fonte original e principal</strong> de todo o meu
                conteúdo.
              </p>
              <p>
                Quando há conteúdo de terceiros (links, referências,
                bibliotecas), sempre faço a devida citação e referência à fonte
                original.
              </p>
            </section>

            <section>
              <h2>📚 Direitos Autorais</h2>
              <p>
                Todo o conteúdo deste site (artigos, código, imagens) é
                protegido por direitos autorais © {new Date().getFullYear()}{" "}
                Maycon Alves.
              </p>
              <p>
                Você pode compartilhar os artigos com a devida atribuição, mas
                não pode republicar o conteúdo completo sem permissão expressa.
              </p>
            </section>

            <section>
              <h2>⚠️ Isenção de Responsabilidade</h2>
              <p>
                Os tutoriais e códigos disponibilizados são fornecidos "como
                estão", sem garantias de qualquer tipo. Embora eu me esforce
                para fornecer informações precisas e atualizadas, não me
                responsabilizo por quaisquer erros ou problemas resultantes do
                uso do conteúdo.
              </p>
              <p>
                Sempre teste o código em ambientes de desenvolvimento antes de
                usar em produção.
              </p>
            </section>

            <section>
              <h2>🔗 Links de Afiliados</h2>
              <p>
                Atualmente, este site <strong>não utiliza</strong> links de
                afiliados. Caso isso mude no futuro, haverá uma divulgação clara
                e transparente.
              </p>
            </section>

            <section>
              <h2>📧 Contato</h2>
              <p>
                Se você tiver dúvidas sobre este disclaimer ou sobre qualquer
                conteúdo do site, entre em contato:
              </p>
              <p>
                <a href="mailto:mayconbalves@gmail.com">
                  mayconbalves@gmail.com
                </a>{" "}
                | <Link href="/contact">Página de Contato</Link>
              </p>
            </section>

            <section>
              <h2>📄 Documentos Relacionados</h2>
              <ul>
                <li>
                  <Link href="/polices">Política de Privacidade</Link>
                </li>
                <li>
                  <Link href="/about">Sobre Mim</Link>
                </li>
                <li>
                  <Link href="/contact">Contato</Link>
                </li>
              </ul>
            </section>

            <footer>
              <div className={styles.container_copyright}>
                <p>
                  © {new Date().getFullYear()} Maycon Alves -
                  <Link href="/polices"> Políticas de Privacidade</Link> |
                  <Link href="/disclaimer"> Disclaimer</Link>
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

export default Disclaimer;
