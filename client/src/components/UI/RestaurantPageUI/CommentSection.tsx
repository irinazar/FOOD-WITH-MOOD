import React, { useState } from 'react';
import type { CommentType } from '../../../types/oneRestaurantType/oneRestaurantTypes';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addCommentThunk } from '../../../features/redux/slices/oneRestaurantSlice/oneRestaurantThunk';

type CommentProp = {
  comments: CommentType[];
};

export default function CommentSection({ comments }: CommentProp): JSX.Element {
  const [input, setInput] = useState({ body: '' });
  const dispatch = useAppDispatch()

  const changeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (e): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-center items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-white dark:text-white p-2 px-1 rounded-lg uppercase">
            Отзывы:
          </h2>
        </div>
        <form className="mb-6" >
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <textarea
              id="comment"
              name='body'
              value={input.body}
              onChange={changeHandler}
              rows={6}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Оставьте свой комментарий"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            onClick={() => {
              void dispatch(addCommentThunk({ id: comments[0].restaurantId, body: input.body }));
              setInput({ body: '' })
            }}
          >
            Отправить
          </button>
        </form>
        {comments.map((el) => (
          <>
            <article className="p-2 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      className="mr-2 w-10 h-10 rounded-full"
                      src={`${el.avatar}`}
                      alt={`${el.userName}`}
                    />
                    {el.userName}
                  </p>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">{el.body}</p>;
            </article>
            <article className="p-2 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900" />
          </>
        ))}
      </div>
    </section>
  );
}
