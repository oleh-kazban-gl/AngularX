import { createAction, props } from '@ngrx/store';
import { CurrentPageState } from './root.model';

export const setCurrentRoute = createAction('[Router] Set Current Page', props<{ data: CurrentPageState }>());
