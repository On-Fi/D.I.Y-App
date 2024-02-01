// export default function ProjectList({
//     projectsToDisplay,
//     favorites,
//     onToggleFavorite,
//   }) {
//     return (
//       <StyledProjectList>
//         {projectsToDisplay.map((project) => (
//           <Card
//             key={project._id}
//             project={project}
//             favorites={favorites}
//             onToggleFavorite={onToggleFavorite}
//           />
//         ))}
//       </StyledProjectList>
//     );
//   }

export default function KnowledgeOverview({ articles }) {
  console.log("hier:", articles);
  return (
    <div>
      {articles.map((article) => {
        return <p key={article._id}>{article.title}</p>;
      })}
    </div>
  );
}
