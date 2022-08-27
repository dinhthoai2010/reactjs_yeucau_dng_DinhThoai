
export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name)
}

export function mappingPostData(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    author: post.author_data,
    authorId: post.author,
    thumbnail: post.featured_media_url,
    createdDate: post.date,
    slug: post.slug,
    categoriesId: post.categories,
    viewCount: post.view_count,
  }
}

export function handleHashCategoryById(categories) {
  const hashObj = {}

  categories.forEach(categoryItem => {
    const key = categoryItem.id

    hashObj[key] = {
      id: categoryItem.id,
      name: categoryItem.name,
      slug: categoryItem.slug,
      lang: categoryItem.lang
    }
  })

  return hashObj
}

export function validateFormData({ value, name }) {
  let error = '';

  switch (name) {
    case 'username':
      if (!value)
        error = 'Username không được rỗng!';
      break;
    case 'password':
      if (!value) {
        error = 'Password không được rỗng!';
      } else if (value.length < 6) {
        error = 'Password phải có ít nhất 6 ký tự'
      }
      break;

    case 'email':
      if (!checkEmail(value)) {
        error = 'Email không đúng định dạng'
      }
      break;

    default:
      break;
  }
  return error;
}

function checkEmail (email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}