import { GetStaticPaths, GetStaticProps } from 'next'
import { PostData, PostUtil } from '../../post/post.util'
import { MDXProvider } from '../../providers/MDXProvider'

interface PostProps {
  postData: PostData
}

export default function Post({ postData }: PostProps) {
  return <MDXProvider>{postData.mdString}</MDXProvider>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PostUtil.getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const postData = PostUtil.getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}
