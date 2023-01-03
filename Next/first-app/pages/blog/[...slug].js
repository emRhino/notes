import { useRouter } from 'next/router';

const BlogPostPage = () => {
    const router = useRouter();

    console.log(router.query);

    return (
        <h1>Blog post</h1>
    )
}

export default BlogPostPage;