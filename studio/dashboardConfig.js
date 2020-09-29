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
                  buildHookId: '5f72988265361300b0d79451',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-aksvuun5',
                  apiId: 'e1be3652-7d8c-49ec-94b4-a2f38b2ade59'
                },
                {
                  buildHookId: '5f72988290cdfa00ea31f9e7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ye271jpu',
                  apiId: '793b9a2f-c798-452a-bfd3-3b3bd6a688a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/barnu5/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ye271jpu.netlify.app',
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
