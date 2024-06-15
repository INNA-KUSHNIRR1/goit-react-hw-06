import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfigContacts = {
  key: 'contacts',
  storage,
};
const persistConfigFiler = {
  key: 'filter',
  storage,
};

const contactsPersistedReducer = persistReducer(
  persistConfigContacts,
  contactsReducer,
);
const filterPersistedReducer = persistReducer(
  persistConfigFiler,
  filtersReducer,
);

export const rootReducer = {
  contacts: contactsPersistedReducer,
  filter: filterPersistedReducer,
};
