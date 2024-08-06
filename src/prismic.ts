import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'your-repo-name'

export const client = prismic.createClient('iza-camargo', {
  // If your repository is private, add an access token
  accessToken: 'MC5acV93QnhBQUFDSUFwbktq.f--_ve-_ve-_vR_vv73vv73vv73vv70u77-977-977-9B--_vWsgTu-_ve-_vU8777-9FO-_ve-_vQ8H77-977-9aCg',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  // routes: [
  //   {
  //     type: 'home',
  //     path: '/',
  //   },
  //   {
  //       type: 'footer',
  //       path: '/',
  //   }
  // ],
})