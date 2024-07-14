export default async function AboutPage() {
  return (
    <main className="flex flex-col p-8 space-y-4">
      <h1 className="text-2xl font-bold text-center">Tentang Blankist</h1>
      <p className="text-base text-justify">
        Selamat datang di Blankist! Blankist adalah aplikasi mobile inovatif
        yang membantu Generasi Z mengatasi tantangan membaca dengan merangkum
        teks panjang menjadi poin-poin penting menggunakan teknologi AI.
      </p>
      <div>
        <h2 className="text-xl font-semibold">Fitur Utama</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Peringkasan Otomatis: Ringkasan teks panjang dengan teknologi AI.
          </li>
          <li>
            Audio Ringkasan: Dengarkan poin-poin penting melalui fitur audio.
          </li>
          <li>
            Penjelasan Personal: Chatbot yang menyesuaikan penjelasan
            berdasarkan kemampuan siswa.
          </li>
        </ul>
      </div>
      <p className="text-base text-justify">
        Misi kami adalah meningkatkan pengalaman membaca dan pemahaman bacaan
        bagi siswa yang melek teknologi.
      </p>
      <div>
        <h2 className="text-xl font-semibold">Hubungi Kami</h2>
        <p className="text-base">
          Untuk informasi lebih lanjut, hubungi kami di{' '}
          <a
            href="mailto:blankist@kobar.co"
            className="text-blue-500 underline"
          >
            blankist@kobar.co
          </a>
          .
        </p>
      </div>
    </main>
  )
}
