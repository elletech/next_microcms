import { client } from '../../libs/client';

export default function Article({ article }) {
  return (
    <div class="mt-6 bg-gray-50">
      <div class=" px-10 py-6 mx-auto">
        <div class="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
          <img
            class="object-cover w-full shadow-sm h-full"
            src={article.eye_catch.url}
          />
          <div class="mt-2">
            <div class="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500  hover:underline">
              {article.title}
            </div>
          </div>
          {article.tag && (
            <div class="flex items-center justify-start mt-4 mb-4">
              <div class="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                #{article.tag}
              </div>
            </div>
          )}

          <div class="mt-2">
            <div class="text-2xl text-gray-700 mt-4 rounded ">
              {article.body}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ctx => {
  const id = ctx.params.id;
  const data = await client.get({ endpoint: 'articles', contentId: id });

  return {
    props: {
      article: data,
    },
  };
};
