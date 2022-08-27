import { MESSAGE_FORM_ERROR } from "../constants"

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

export function mappingCurrentUser(user) {
  return {
    id: user.id,
    email: user.email,
    nickname: user.nickname,
    avatar: user.avatar_urls[96]
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


export function handleHashTagsById(tags) {
  const hashObj = {}

  tags.forEach(tag => {
    const key = tag.id

    hashObj[key] = {
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
      lang: tag.lang
    }
  })

  return hashObj
}



export function mappingMenu(menus) {
  if (!menus) return [];
  let menu1 = menus.map(menu => {
    return {
      id: menu.ID,
      title: menu.title,
      url: menu.url,
      postType: menu.post_type,
      childItems: mappingMenu(menu.child_items)
    }
  });
  return menu1;
}

export function mappingPosts(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    postType: post.type,
    commentCount : post.comment_count||0,
    viewCount : post.view_count||0,
    content : post.content.rendered,
    categories: post.categories,
    tags : post.tags,
    excerpt : post.excerpt.rendered,
    image : post.featured_media_url,
    date : post.date,
    slug: post.slug,
    author: {
      avatar: post.author_data.avatar??"/assets/images/blog-detail.jpg",
      nickName: post.author_data.nickname||"Tuy Phong",
      description: post.author_data.description||"Khong tim thay noi dungs"
    }
  }
}


export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validateFormRegister({ value, name }) {
  let error = ''

  if (name === 'email') {
    if (!value) {
      error = MESSAGE_FORM_ERROR.email_required
    }
    else if (!validateEmail(value)) {
      error = MESSAGE_FORM_ERROR.rest_user_invalid_email
    }
  } else if (name === 'username' && !value) {
    error = MESSAGE_FORM_ERROR.username_required
  } else if (name === 'password') {
    if (!value) {
      error = MESSAGE_FORM_ERROR.password_required
    } else if (value.length < 6) {
      error = MESSAGE_FORM_ERROR.password_length
    }
  }

  return error
}

export function validateFormData({ value, name }) {
  let error = '';

  if (name === 'username' && !value) {
    error = 'Username không được rỗng!';
  }

  if (name === 'password') {
    if (!value) {
      error = 'Password không được rỗng!';
    } else if (value.length < 6) {
      error = 'Password phải có ít nhất 6 ký tự'
    }
  }

  return error;
}