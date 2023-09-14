<template>
  <table class="table align-middle text-center">
    <thead class="table-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">課程圖片</th>
        <th scope="col">課程名稱</th>
        <th scope="col">課程教練</th>
        <th scope="col">課程時間</th>
        <th scope="col">單價</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody v-for="(item, index) in pageWishlistClasses">
      <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td><img src=https://picsum.photos/id/17/200 alt="..." /></td>
        <td>{{ item.courseName }}</td>
        <td>{{ item.employeename }}</td>
        <td>{{ item.classDate }}&nbsp;{{ item.classTime }}</td>
        <td>$NT &nbsp;{{ item.price }}</td>
        <td>
          <div
            type="button"
            class="bi bi-cart2"
            @click="addWishlistToCart(item.classId)"
          ></div>
          <div
            type="button"
            class="bi bi-trash-fill"
            @click="
              deleteWishlistItem(item.classId, item.listId, item.wishAddSince)
            "
          ></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
/*
  imports
 */

import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useDialog } from "naive-ui";
import { useCartStore, useWishlistStore } from "../../stores/courseStore.js";
import { storeToRefs } from "pinia";
const URL = import.meta.env.VITE_API_JAVAURL;

/*
  Store and relative responsive datas and local storage
*/
const cartStore = useCartStore();
const { courseCartStore } = storeToRefs(cartStore);
const wishlistStore = useWishlistStore();
const { courseWishlistStore } = storeToRefs(wishlistStore);

/*
  Load datas
*/

// Load Classes data
const pageWishlistClasses = ref([]);
const loadPageClasses = async () => {
  console.log(courseWishlistStore.value);
  const URLAPI = `${URL}/classes/findAllClassesInMemberWishlist`;
  const response = await axios
    .get(URLAPI, {
      params: {
        memberId: localStorage.getItem("memberid"),
      },
    })
    .catch((error) => {
      console.log(error.toJSON());
    });
  // console.log(response);

  pageWishlistClasses.value = response.data;
  // console.log(pageClasses);
};

/*
  Methods for delete cart items
*/

// Delete single wishlist item throuth deleting in store
const deleteWishlistItem = (classId) => {
  console.log(classId);
  courseWishlistStore.value.splice(
    courseWishlistStore.value.indexOf(classId),
    1
  );
  // deleteWishlistItemToDB(classId);
};

/*
  Methods Add wishlist item to cart
*/
// const emits = defineEmits(["addWishlistToCartEmit"]);
const addWishlistToCart = (classId, listId) => {
  if (!courseCartStore.value.includes(classId)) {
    courseCartStore.value.push(classId);
    deleteWishlistItem(listId);
    handleSuccess("已成功加入您的購物車");
  } else {
    handleSuccess("課程已存在您的購物車");
  }
};

/*
  watcher for wishlist items in store
*/
watch(courseWishlistStore.value, () => {
  loadPageClasses();
});

/*
  method for add and delete item to wishlish DB
*/

// delete(actually is put, just add deletedate ) item to wishlish DB
const deleteWishlistItemToDB = async (classId, listId, wishAddSince) => {
  const reswishlist = await axios
    .put(`${URL}/wishlist/${listId}`, {
      listId: listId,
      memberId: localStorage.getItem("memberid"),
      classId: classId,
      wishAddSince: wishAddSince,
    })
    .catch((error) => {
      console.log(error.toJSON());
    });
};

/*
  Naive UI
*/
const dialog = useDialog();
const handleSuccess = (contentText) => {
  dialog.success({
    title: "Success",
    content: contentText,
    positiveText: "確定",
  });
};

/*
  LifeCycle Hooks
*/
onMounted(() => {
  loadPageClasses();
});
</script>

<style></style>
