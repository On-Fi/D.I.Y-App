export default function LoadingSpinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
          width: "394px",
          height: "394px",
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="18" cy="50" r="4" fill="#f9c858">
          <animate
            attributeName="cy"
            values="34;66;34"
            times="0;0.5;1"
            dur="1.075268817204301s"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle cx="27" cy="61.31370849898476" r="4" fill="#858f87">
          <animate
            attributeName="cy"
            values="34;66;34"
            times="0;0.5;1"
            dur="1.075268817204301s"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            begin="-0.13440860215053763s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle cx="36" cy="66" r="4" fill="#c4b8aa">
          <animate
            attributeName="cy"
            values="34;66;34"
            times="0;0.5;1"
            dur="1.075268817204301s"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            begin="-0.26881720430107525s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle cx="45" cy="61.31370849898476" r="4" fill="#dbd8d6">
          <animate
            attributeName="cy"
            values="34;66;34"
            times="0;0.5;1"
            dur="1.075268817204301s"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            begin="-0.4032258064516129s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle cx="54" cy="50" r="4" fill="#f9c858">
          <animate
            attributeName="cy"
            values="34;66;34"
            times="0;0.5;1"
            dur="1.075268817204301s"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            begin="-0.5376344086021505s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle cx="63" cy="38.68629150101524" r="4" fill="#858f87">
          <animate
            attributeName="cy"
            values="34;66;34"
            times="0;0.5;1"
            dur="1.075268817204301s"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            begin="-0.6720430107526881s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle cx="72" cy="34" r="4" fill="#c4b8aa">
          <animate
            attributeName="cy"
            values="34;66;34"
            times="0;0.5;1"
            dur="1.075268817204301s"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            begin="-0.8064516129032258s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle cx="81" cy="38.68629150101523" r="4" fill="#dbd8d6">
          <animate
            attributeName="cy"
            values="34;66;34"
            times="0;0.5;1"
            dur="1.075268817204301s"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            begin="-0.9408602150537634s"
            repeatCount="indefinite"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
