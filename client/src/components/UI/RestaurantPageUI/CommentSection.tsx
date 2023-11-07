import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { CommentType } from '../../../types/oneRestaurantType/oneRestaurantTypes';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
  addCommentThunk,
  deleteCommentThunk,
} from '../../../features/redux/slices/oneRestaurantSlice/oneRestaurantThunk';
import { STATIC_URL } from '../../Pages/UserAccount/ui/UserInfo';
import style from './style.module.css';

type CommentProp = {
  comments: CommentType[];
};

function CommentSection({ comments }: CommentProp): JSX.Element {
  const [input, setInput] = useState({ body: '' });
  const dispatch = useAppDispatch();

  const userWithStatus = useAppSelector((store) => store.lkReducer.currentUserLk);

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
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <textarea
              id="comment"
              name="body"
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
              setInput({ body: '' });
            }}
          >
            Отправить
          </button>
        </form>
        {comments?.map((el) => (
          <>
            <article className="p-2 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      className="mr-2 w-10 h-10 rounded-full"
                      src={`${STATIC_URL}/img/users/${el.user?.avatar}`}
                      alt={`${el.user?.userName}`}
                    />
                    {el.user?.userName}
                  </p>
                </div>
                {userWithStatus?.isAdmin === true && (
                  <button
                    type="button"
                    className={style.deleteComment}
                    onClick={() =>
                      void dispatch(
                        deleteCommentThunk({ restaurantId: el.restaurantId, commentId: el.id }),
                      )
                    }
                  >
                    Удалить
                  </button>
                )}
              </footer>
              <p className="text-gray-500 dark:text-gray-400">{el.body}</p>
              <br />
              <article className="p-2 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900" />
            </article>
            {el?.commentReply.map((reply) => (
              <article
                key={uuidv4()}
                className="p-2 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                  >
                    <svg
                      className="mr-1.5 w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                      />
                    </svg>
                    Ответ от ресторана:
                  </button>
                </div>
                <article className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                  <p className="text-gray-500 dark:text-gray-400">{reply.body}</p>
                </article>
              </article>
            ))}
          </>
        ))}
      </div>
    </section>
  );
}

export default React.memo(CommentSection);
