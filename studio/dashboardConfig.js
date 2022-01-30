export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f6a604c7854421a2b4320a',
                  title: 'Sanity Studio',
                  name: 'blogcms-studio',
                  apiId: '024c9d5c-ed2d-42ff-a21f-5551ebf84df4'
                },
                {
                  buildHookId: '61f6a60548ae7007307caf13',
                  title: 'Portfolio Website',
                  name: 'blogcms-web',
                  apiId: '4f4f85f7-592c-4e54-929d-2e545ed7d63e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NawafAlmaqaadi/BlogCMS',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://blogcms-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
