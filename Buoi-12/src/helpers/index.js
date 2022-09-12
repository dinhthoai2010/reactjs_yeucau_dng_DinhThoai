import { MESSAGE_FORM_ERROR } from "../constants"

export { formatRelativeDate } from './day'

export function getQueryStr(name, location) {
  return new URLSearchParams(location.search).get(name)
}

export function mappingPostDetailData(post) {
  return {
    ...mappingPostData(post),
    tagsId: post.tags,
    contentHTML: post.content.rendered,
    commentCount: post.comment_count
  }
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
    shortDescHTML: post.excerpt.rendered
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

export function mappingMainMenus(menuItem) {
  const data = {
    id: menuItem.ID,
    title: menuItem.title,
    url: menuItem.url,
    childItems: menuItem.child_items || []
  }

  data.childItems = data.childItems.map(mappingMainMenus);

  return data;
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

export function highlightText(queryStr, targetStr) {
  const reg = new RegExp(queryStr, 'gi');
  const finalStr = targetStr.replace(reg, str => {
    return '<mark>' + str + '</mark>'
  });

  return finalStr
}

export function genUserLink(authorId) {
  return `/user/${authorId}`;
}

export function genPostLink(slug) {
  return `/post/${slug}`;
}


export function commentMapping(comment) {
  return {
    author: comment.author,
    authorAvatarUrls: comment.author_avatar_urls[96],
    content: comment.content.rendered,
    date: comment.date,
    parent: comment.parent,
    authorData : comment.author_data,
    commentReplyCount : comment.comment_reply_count
  }
}