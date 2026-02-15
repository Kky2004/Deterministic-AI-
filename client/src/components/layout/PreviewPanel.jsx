
import PlanRenderer from "../../renderers/planRenderer";

export default function PreviewPanel({ result }) {
  return (
    <section className="w-[35%] flex flex-col rounded-2xl overflow-hidden glass-effect anim-slide-right">

      <div className="px-5 py-4 border-b border-white/10 text-green-400 font-semibold">
        Live Preview
      </div>

      <div className="flex-1 p-4">
        <div className="bg-white text-black rounded-xl p-6 shadow-xl min-h-[300px]">
             <PlanRenderer plan={result?.plan} />
        </div>
      </div>

    </section>
  );
}
