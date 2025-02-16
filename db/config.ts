import { defineDb, defineTable, column, NOW } from 'astro:db';

const Inscriptions = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    nombre: column.text(),
    email: column.text(),
    opcion1: column.boolean(),
    opcion2: column.boolean(),
    opcion3: column.boolean(),
    created_at: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: {
    inscriptions: Inscriptions,
  },
});
