export default function() {

  this.urlPrefix = 'http://localhost:4200';

  this.get('/github-issues', (schema) => {
    return schema.githubIssues.all();
  });
}
