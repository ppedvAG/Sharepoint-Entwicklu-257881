export interface BlogPost {
    id: number;
    title: string;
    content: string;
}

interface BlogProps {
    posts: BlogPost[]; // Als Propertie bekommt die Komponente eine Liste von BlockPost
}

export const Blog: React.FC<BlogProps> = ({ posts }) => {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            {/* Sidebar */}
            <aside style={{ width: '30%', background: '#f0f0f0', padding: '10px' }}>
                <h3>Beiträge</h3>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </aside>
            {/* Hauptinhalt */}
            <main style={{ width: '70%' }}>
                {posts.map((post) => (
                    <article key={post.id} style={{ marginBottom: '20px' }}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </article>
                ))}
            </main>
        </div>
    )
}