import { revalidatePath } from "next/cache";
import Link from "next/link";

const Posts = ({ posts }) => {
	return (
		<div>
			<h2>All Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export async function getStaticProps() {
	console.log("GetStaticProps from Posts page");
	const res = await fetch(
		"http://localhost:4000/posts",
	);
	const posts = await res.json();
	return { props: { posts }, revalidate: 20 };
}

export default Posts;