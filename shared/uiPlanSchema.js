// Allowed layout types
export const LAYOUTS = {
  SINGLE_COLUMN: "single-column",
  SIDEBAR_MAIN: "sidebar-main",
  MODAL_VIEW: "modal-view"
};

// Create empty UI plan
export function createEmptyPlan() {
  return {
    layout: LAYOUTS.SINGLE_COLUMN,
    components: []
  };
}

// Create a component node
export function createComponent({ id, type, props = {} }) {
  return {
    id,
    type,
    props
  };
}

