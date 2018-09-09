export default function() {

  this.urlPrefix = 'https://api.github.com/';

  this.get('/repos/:owner/:repo/issues', (schema, request) => {

    const { repo, owner } = request.params;

    const repositoryUrl = `https://api.github.com/repos/${owner}/${repo}`;
    return schema.githubIssues.where({ repositoryUrl });

  });
}
