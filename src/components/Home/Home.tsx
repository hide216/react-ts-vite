export function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <div className="card">
          <p>
            <a href="/Events">・Events</a>
          </p>
          <p>
            <a href="/Todo">・Todo</a>
          </p>
          <p>
            <a href="/About">・About</a>
          </p>
        </div>
        <p className="read-the-docs">リンク先の画面を開発してください。</p>
      </div>
    </>
  );
}
export default Home;
