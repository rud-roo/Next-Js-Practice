import { revalidatePath } from "next/cache";
import { useRouter } from "next/router";

const PostDetails = ({post}) => {
	const router = useRouter();
	if(router.isFallback){
		return("Page is generating on the server. Please wait a moment.")
	}
	return <div>
		<h2>Post Details Page of postId - {post?.id}</h2>
		<p>Title: {post?.title}</p>
		<p>Description: {post?.body}</p>
	</div>;
};


export async function getStaticPaths() {
	const res = await fetch("http://localhost:4000/posts");
	const posts = await res.json();
	return{
		paths: posts.map((post) => ({
			params: {
				postId: post.id,
			}
		})),
		fallback: true,
	}
}

export async function getStaticProps(context) {
	const res = await fetch(
		`http://localhost:4000/posts/${context.params.postId}`,
	);
	const post = await res.json();
	return { props: { post } };
}

export default PostDetails;