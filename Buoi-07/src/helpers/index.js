
export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name)
}

export function mappingPostData(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    author: post.author_data,
    authorId: post.author,
    excerpt: post.excerpt.rendered,
    thumbnail: post.featured_media_url,
    createdDate: post.date,
    slug: post.slug,
    categories: post.categories,
    tags: post.tags
  }
}

export function mappingCategoryData(category) {
  return {
    id: category.id,
    count: category.count,
    description: category.description,
    name: category.name,
    slug: category.slug,
    taxonomy: category,
  }
}

export function getPost(posts, number, offset = 0) {
  let data = []
  let num = number + offset > posts.length ? posts.length : number + offset;
  for (let i = offset; i < num; i++) {
    data.push(posts[i])
  }
  return data;
}

// export function listCategory(listCat){
//   return listCat.reduce(item=>item.id==listCat)
// }