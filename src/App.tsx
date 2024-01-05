import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera,' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portfólio!',
      },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2024-01-01 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera,' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portfólio!',
      },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2023-12-31 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
