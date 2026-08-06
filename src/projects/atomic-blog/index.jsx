import styles from "./AtomicBlog.module.css";
import { useState } from "react";
import { PostProvider, usePosts } from "./PostContext";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// 30 fake posts are generated.
// Those posts are displayed.
// You can search them.
// You can create new posts.
// You can delete all posts.
// You can open an archive of 10,000 extra posts.
// You can copy an archived post into the main blog.
// You can switch between light and dark mode.

function AtomicBlog() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
  // }, [isFakeDark]);

  return (
    <PostProvider>
      <section className={`${styles.page} ${isFakeDark ? styles.dark : ""}`}>
        <button
          onClick={() => setIsFakeDark((dark) => !dark)}
          className={styles.btnFakeDarkMode}
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>

        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostProvider>
  );
}

function Header() {
  const { onClearPosts } = usePosts();
  return (
    <header className={styles.header}>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div className={styles.controls}>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts();

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

function Results() {
  const { posts } = usePosts();
  return <p>🚀 {posts.length} atomic posts found</p>;
}

function Main({ posts, onAddPost }) {
  return (
    <main className={styles.main}>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

function Posts() {
  return (
    <section className={styles.postsContainer}>
      <List />
    </section>
  );
}

function FormAddPost() {
  const { onAddPost } = usePosts();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}

function List() {
  const { posts } = usePosts();

  return (
    <ul className={styles.posts}>
      {posts.map((post, i) => (
        <li key={i} className={styles.card}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

function Archive() {
  const { onAddPost } = usePosts();
  const [posts] = useState(() =>
    Array.from({ length: 100 }, () => createRandomPost()),
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside className={styles.archive}>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>&copy; by The Atomic Blog ✌️</footer>
  );
}

export default AtomicBlog;
