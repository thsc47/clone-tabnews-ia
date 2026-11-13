import { Suspense } from "react";
import Celebration from "./celebration";
import styles from "./page.module.css";

const DIGITS_ONLY = /^\d+$/;

async function ContentCount() {
  let total = null;
  try {
    const response = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?per_page=1&strategy=new",
      { next: { revalidate: 60 }, signal: AbortSignal.timeout(8000) },
    );
    const value = response.headers.get("x-pagination-total-rows");
    if (!response.ok || value === null || !DIGITS_ONLY.test(value)) {
      throw new Error("Resposta inválida da API do TabNews");
    }
    total = Number(value);
    if (!Number.isSafeInteger(total)) {
      throw new Error("Total inválido na API do TabNews");
    }
  } catch (error) {
    total = null;
    console.error("Não foi possível consultar o total de conteúdos:", error);
  }

  return (
    <div className={styles.stat}>
      {total === null ? (
        <p className={styles.unavailable}>
          Não foi possível consultar o total de conteúdos agora.
          <br />Tente atualizar a página em instantes.
        </p>
      ) : (
        <>
          <strong className={styles.count}>{total.toLocaleString("pt-BR")}</strong>
          <span>conteúdos publicados no TabNews</span>
          <small>Consultado na API pública, atualizado a cada minuto</small>
        </>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main className={styles.page}>
      <Celebration />
      <div className={styles.content}>
        <span className={styles.brand}>clone<span>TabNews</span></span>
        <p className={styles.badge}>Obra em andamento</p>
        <h1>Em construção<span>.</span></h1>
        <p className={styles.description}>
          Estamos nesse exato momento reconstruindo o clone do TabNews, um lugar
          na internet para quem trabalha com tecnologia e precisa consumir
          conteúdos com valor concreto.
        </p>
        <Suspense fallback={
          <div className={styles.stat} role="status">
            <p>Consultando conteúdos do TabNews…</p>
          </div>
        }>
          <ContentCount />
        </Suspense>
        <a className={styles.link} href="https://www.tabnews.com.br">
          Visitar o TabNews oficial <span aria-hidden="true">↗</span>
        </a>
        <p className={styles.footer}>Um projeto de aprendizado. Feito com curiosidade.</p>
      </div>
    </main>
  );
}
