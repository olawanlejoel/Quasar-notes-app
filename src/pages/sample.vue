<template>
  <q-page class="">
    <div class="q-pa-md">
      <q-input
        bottom-slots
        v-model="newNoteContent"
        placeholder="Write your note here..."
        counter
        autogrow
        maxlength="300"
      >
        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
    </div>
    <q-separator size="10px" />
    <q-list bordered class="rounded-borders" style="max-width: 600px">
      <q-item-label header>You have 3 Note(s)</q-item-label>

      <div>
        <q-item>
          <q-item-section top>
            <q-item-label caption class="text-grey-9">
              He who has imagination without learning has wings but no feet.
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-9 q-gutter-xs">
              <q-btn size="13px" flat dense round icon="delete" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator size="1px" />
      </div>

      <div>
        <q-item>
          <q-item-section top>
            <q-item-label caption class="text-grey-9">
              He who has imagination without learning has wings but no feet.
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-9 q-gutter-xs">
              <q-btn size="13px" flat dense round icon="delete" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator size="1px" />
      </div>

      <div>
        <q-item>
          <q-item-section top>
            <q-item-label caption class="text-grey-9">
              He who has imagination without learning has wings but no feet.
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-9 q-gutter-xs">
              <q-btn size="13px" flat dense round icon="delete" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator size="1px" />
      </div>
    </q-list>
  </q-page>
</template>

<script>
import db from "src/boot/firebase";
export default {
  name: "PageIndex",
  data() {
    return {
      basic: false,
      fixed: false,
      newNoteContent: ""
    };
  }
};
</script>
