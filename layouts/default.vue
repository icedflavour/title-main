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
    <nav class="flex w-screen bg-[#212529] justify-center items-center px-8">
        <div class="bg-[#F8F9FA] h-[30px] w-[3px] rounded-full"></div>
        <button class="btn-nav">
            Categories
        </button>
        <div class="bg-[#F8F9FA] h-[30px] w-[3px] rounded-full"></div>
        <button class="btn-nav">
            Gloves
        </button>
        <div class="bg-[#F8F9FA] h-[30px] w-[3px] rounded-full"></div>
        <button class="btn-nav">
            Boxing Shoes
        </button>
        <div class="bg-[#F8F9FA] h-[30px] w-[3px] rounded-full"></div>
        <button class="btn-nav">
            TOP Sellers
        </button>
        <div class="bg-[#F8F9FA] h-[30px] w-[3px] rounded-full"></div>
        <button class="btn-nav">
            New
        </button>
        <div class="bg-[#F8F9FA] h-[30px] w-[3px] rounded-full"></div>
        <button class="btn-nav">
            Sale
        </button>
        <div class="bg-[#F8F9FA] h-[30px] w-[3px] rounded-full"></div>
        <button class="btn-nav">
            Contacts
        </button>
        <div class="bg-[#F8F9FA] h-[30px] w-[3px] rounded-full"></div>
    </nav>
    <slot />
    <footer>
        <div class="h-20 bg-gray-800 text-gray-100 text-2xl flex justify-center items-center">
            Example footer
        </div>
    </footer>
</template>

<script>
export default {
    setup () {

        return {}
    }
}
</script>