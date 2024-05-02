<template>
    <header class="flex justify-center">
        <div class="w-[92vw] grid grid-cols-12 p-4">
            <div class="col-start-1 col-end-5 justify-items-start ">
                <div class="flex">
                    <button class="btn-header">
                        <img class="w-5 h-5 fill-red-700 mg-2" src="/assets/img/icons/language.svg" alt="">
                        <span>Language</span>
                    </button>
                    <button class="btn-header">
                        <img class="w-5 h-5 fill-red-700 mg-2" src="/assets/img/icons/user.svg" alt="">
                        <span>Profile</span>
                    </button> 
                    <button class="btn-header">
                        <img class="w-5 h-5 fill-red-700 mg-2" src="/assets/img/icons/instagram.svg" alt="">
                        <span>Instagram</span>
                    </button>
                </div>
            </div>
            <img class="h-10 col-start-5 col-end-9 place-content-center" src="/assets/img/Logo.png" alt="">
            <div class="col-start-10 col-end-13 justify-items-end">
                <div class="flex">
                    <button class="btn-header">
                        <img class="w-5 h-5 fill-red-700 mg-2" src="/assets/img/icons/phone.svg" alt="">
                        <span>Call</span>
                    </button>
                    <button class="btn-header">
                        <img class="w-5 h-5 fill-red-700 mg-2" src="/assets/img/icons/shopping-cart.svg" alt="">
                        <span>Cart</span>
                    </button>
                    <button class="btn-header">
                        <img class="w-5 h-5 fill-red-700 mg-2" src="/assets/img/icons/search.svg" alt="">
                        <span>Search</span>
                    </button>
                </div>
            </div>
        </div>
        
    </header>
    <div>
        <slot />
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>