import Styles from "./index.module.css";
import Link from "next/link";

export default function Index() {
  return (
    <div className={Styles.container}>
      <h4>
        API untuk mendapatkan quotes random (bahasa indonesia) dari berbagai
        kalangan, mulai dari mantan presiden, pebisnis, penemu, sahabat nabi,
        pahlawan, sampai masyarakat biasa
      </h4>
      <h4>Routes :</h4>
      <h4>/api = untuk mendapatkan semua quote</h4>
      <h4>/api/quotes = mendapatkan random quote</h4>
      <h4>/api/author = melihat semua author</h4>
      <h4>
        contoh :
        <Link href="/api/quotes">
          <a> /api/quotes</a>
        </Link>
      </h4>
      <h4>
        <Link href="https://github.com/ahmadRamadhan20">
          <a>Github</a>
        </Link>
      </h4>
      <h4>Still under development</h4>
    </div>
  );
}
