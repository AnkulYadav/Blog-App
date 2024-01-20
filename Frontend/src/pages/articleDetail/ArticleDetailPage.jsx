import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import { Link } from 'react-router-dom'
import SuggestedPosts from './container/SuggestedPosts'

const breadcrumbsData = [
    { name: 'Home', link: '/' },
    { name: 'Blog', link: '/blog' },
    { name: 'Article Detail', link: '/blog/1' },
];

const postsData = [
    {
        _id: 1,
        image: images.PostImage,
        title: 'The ultimate guide to design',
        createdAt: '17 Jan 2024',

    },
    {
        _id: 2,
        image: images.PostImage,
        title: 'The ultimate guide to design',
        createdAt: '17 Jan 2024',

    },
    {
        _id: 3,
        image: images.PostImage,
        title: 'The ultimate guide to design',
        createdAt: '17 Jan 2024',

    },
    {
        _id: 4,
        image: images.PostImage,
        title: 'The ultimate guide to design',
        createdAt: '17 Jan 2024',

    },
    {
        _id: 5,
        image: images.PostImage,
        title: 'The ultimate guide to design',
        createdAt: '17 Jan 2024',

    },
]

const TagData = [
    {
        _id: 1,
        name: 'Education',
    },
    {
        _id: 2,
        name: 'Software',
    },
    {
        _id: 3,
        name: 'Technology',
    },
    {
        _id: 4,
        name:'Music',
    },
    {
        _id: 5,
        name:'Art',
    },
    {
        _id: 6,
        name:'Photography',
    },
    {
        _id: 7,
        name:'Gaming',
    }
]


function ArticleDetailPage() {
    return (
        <MainLayout>
            <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start '>
                <article className='flex-1'>
                    <BreadCrumbs data={breadcrumbsData} />
                    <img className='rounded-xl w-full' src={images.PostImage} alt="post image" />
                    <Link to="/blog/?category=selectedCategory" className='text-primary text-sm font-roboto inline-block mt-4 md:text-base'>EDUCATION</Link>
                    <h1 className='text-xl font-bold font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>The ultimate guide to design</h1>
                    <div className='mt-4 text-dark-soft'>
                        <p className='leading-7 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi incidunt eos quia at a ab quae itaque non. Facilis quod accusantium, exercitationem numquam nihil fugit laborum quam eaque. Cupiditate, unde. Modi fugiat vel commodi similique reprehenderit consectetur ipsum magnam ullam accusantium? Dolores deleniti non nihil eum ullam consectetur veritatis eos.</p>
                    </div>
                </article>
                <SuggestedPosts className="mt-8 lg:mt-0 lg:max-w-xs" heading="Latest Article" posts={postsData} tags={TagData} />
            </section>
        </MainLayout>
    )
}

export default ArticleDetailPage
