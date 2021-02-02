import { createAction, props } from '@ngrx/store';

export const openSidebar = createAction(
  '[UI] Open Sidebar',
  props<{ isOpenSidebar: boolean }>()
);

export const closeSidebar = createAction(
  '[UI] Close Sidebar',
  props<{ isOpenSidebar: boolean }>()
);
