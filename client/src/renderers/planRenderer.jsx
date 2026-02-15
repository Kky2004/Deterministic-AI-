import { componentRegistry } from "../systemRegistry";

export default function PlanRenderer({ plan }) {
  if (!plan || !plan.components) return null;

  const renderItem = (item) => {
    const Component = componentRegistry[item.type];
    if (!Component) return null;

    return <Component key={item.id} {...item.props} />;
  };

  if (plan.layout === "sidebar-main") {
    const sidebar = plan.components.find(c => c.type === "Sidebar");
    const main = plan.components.filter(c => c.type !== "Sidebar");

    return (
      <div className="flex w-full h-full">
        <aside className="w-64 border-r border-white/10">
          {sidebar && renderItem(sidebar)}
        </aside>

        <main className="flex-1 p-4 space-y-4">
          {main.map(renderItem)}
        </main>
      </div>
    );
  }

  return <div className="space-y-4">{plan.components.map(renderItem)}</div>;
}
