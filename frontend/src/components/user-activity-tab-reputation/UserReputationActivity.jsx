/* eslint-disable no-debugger */
import React from 'react';

import './UserReputationActivity.css';

export default function UserReputationActivity() {
	return (
		<div className="user-rep-activity-container rep-container">
			<div id="user-tab-reputation" className="js-user-tab">
				<div className="d-flex ai-end jc-space-between mb8 fw-wrap">
					<div className="flex--item fl-grow1">
						<div className="d-flex fd-column">
							<h2 className="flex--item fs-title mb0">
								10 Reputation
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="ba bc-black-100 bar-md ">
				<div className="js-post-expandable">
					<div className="d-flex g4 p8 py2 md:p6 fw-wrap bb bc-black-075">
						<span className="s-badge baw0 bg-transparent fc-green-500 flex--item jc-end fs-caption wmn1 sm:wmn-initial md:fd-row-reverse fc-black-500">
							+10
						</span>
						<button
							className="flex--item s-btn s-btn__xs s-btn__icon p6 mr2 as-start js-post-expandable-control"
							data-controller="s-expandable-control"
							aria-controls="expandable-2022-05-08"
							aria-expanded="true"
							aria-label="toggle 2022-05-08 reputation change details"
							onClick={() => {
								let hiddenIcon = document.querySelector(
									'.js-post-expandable-hidden',
								);
								if (hiddenIcon.classList.contains('d-none')) {
									hiddenIcon.classList.remove('d-none');
								} else {
									hiddenIcon.classList.add('d-none');
								}
								let visibleIcon = document.querySelector(
									'.js-post-expandable-visible',
								);
								if (visibleIcon.classList.contains('d-none')) {
									visibleIcon.classList.remove('d-none');
								} else {
									visibleIcon.classList.add('d-none');
								}
							}}
						>
							<span className="js-post-expandable-hidden d-none">
								<svg
									aria-hidden="true"
									className="svg-icon iconArrowRightSm"
									width="14"
									height="14"
									viewBox="0 0 14 14"
								>
									<path d="M5 11V3l4 4-4 4Z"></path>
								</svg>
							</span>
							<span className="js-post-expandable-visible">
								<svg
									aria-hidden="true"
									className="svg-icon iconArrowDownSm"
									width="14"
									height="14"
									viewBox="0 0 14 14"
								>
									<path d="M3 5h8L7 9 3 5Z"></path>
								</svg>
							</span>
						</button>
						<div
							className="flex--item as-center fs-body2 mt2 md:mt0"
							title="2022-05-08"
						>
							today
						</div>
					</div>
					<div
						className="s-expandable m0 is-expanded"
						id="expandable-2022-05-08"
					>
						<div className="js-post-expandable-body s-expandable--content bg-black-025 bb bc-black-075 js-loaded">
							<div className="">
								<div className="d-flex g4 p8 py2 md:p6 fw-wrap">
									<div className="d-flex g4 ai-center jc-end fs-caption wmn1 md:fd-row-reverse fc-black-500">
										<span title="answer was upvoted 1 time">
											upvote
										</span>
										<span className="s-badge baw0 bg-transparent fc-green-500">
											+10
										</span>
									</div>
									<div className="d-flex g4 fw-nowrap fl-grow1 break-word fs-body2 wmx100">
										<div className="flex--item as-center fs-body2 mt2 md:mt0">
											<a
												href="/questions/3293531/how-to-permanently-remove-few-commits-from-remote-branch/3293592#3293592"
												className="answer-hyperlink "
											>
												How to permanently remove few
												commits from remote branch
											</a>
										</div>
									</div>
									<div className="s-user-card s-user-card__minimal jc-end fl-grow1">
										<time
											className="s-user-card--time ws-nowrap"
											title="2022-05-08 00:46:13Z"
										>
											9 mins ago
										</time>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="js-post-expandable">
					<div className="d-flex g4 p8 py2 md:p6 fw-wrap bb bc-black-075">
						<span className="s-badge baw0 bg-transparent fc-green-500 flex--item jc-end fs-caption wmn1 sm:wmn-initial md:fd-row-reverse fc-black-500">
							+700
						</span>
						<button
							className="flex--item s-btn s-btn__xs s-btn__icon p6 mr2 as-start js-post-expandable-control"
							data-load-url="/ajax/users/6309/rep/day/1651881600?sort=post"
							data-controller="s-expandable-control"
							aria-expanded="true"
							aria-controls="expandable-2022-05-07"
							aria-label="toggle 2022-05-07 reputation change details"
							onClick={() => {
								let hiddenIcon = document.querySelector(
									'.js-post-expandable-hidden',
								);
								if (hiddenIcon.classList.contains('d-none')) {
									hiddenIcon.classList.remove('d-none');
								} else {
									hiddenIcon.classList.add('d-none');
								}
								let visibleIcon = document.querySelector(
									'.js-post-expandable-visible',
								);
								if (visibleIcon.classList.contains('d-none')) {
									visibleIcon.classList.remove('d-none');
								} else {
									visibleIcon.classList.add('d-none');
								}
							}}
						>
							<span className="js-post-expandable-hidden d-none">
								<svg
									aria-hidden="true"
									className="svg-icon iconArrowRightSm"
									width="14"
									height="14"
									viewBox="0 0 14 14"
								>
									<path d="M5 11V3l4 4-4 4Z"></path>
								</svg>
							</span>
							<span className="js-post-expandable-visible">
								<svg
									aria-hidden="true"
									className="svg-icon iconArrowDownSm"
									width="14"
									height="14"
									viewBox="0 0 14 14"
								>
									<path d="M3 5h8L7 9 3 5Z"></path>
								</svg>
							</span>
						</button>
						<div
							className="flex--item as-center fs-body2 mt2 md:mt0"
							title="2022-05-07"
						>
							yesterday
						</div>
					</div>
					<div
						className="s-expandable m0 is-expanded"
						id="expandable-2022-05-07"
					>
						<div className="js-post-expandable-body s-expandable--content bg-black-025 bb bc-black-075 js-loaded">
							<div className=" js-post-expandable">
								<div className="d-flex g4 p8 py2 md:p6 fw-wrap bb bc-black-075">
									<div className="d-flex g4 ai-center jc-end fs-caption wmn1 md:fd-row-reverse fc-black-500">
										<span>2 events</span>
										<span className="s-badge baw0 bg-transparent fc-blue-500">
											+502
										</span>
									</div>
									<div className="d-flex g4 fw-nowrap fl-grow1 break-word fs-body2 wmx100">
										<button
											className="s-btn s-btn__xs s-btn__icon p6 mr2 js-post-expandable-control as-start"
											data-load-url="/ajax/users/6309/rep/expand/1651881600/1651968000?postId=72120005"
											data-controller="s-expandable-control"
											aria-expanded="true"
											aria-controls="expandable-1651881600-72120005"
											aria-label="toggle 1651881600 reputation change details"
											onClick={() => {
												let hiddenIcon =
													document.querySelector(
														'.js-post-expandable-hidden',
													);
												if (
													hiddenIcon.classList.contains(
														'd-none',
													)
												) {
													hiddenIcon.classList.remove(
														'd-none',
													);
												} else {
													hiddenIcon.classList.add(
														'd-none',
													);
												}
												let visibleIcon =
													document.querySelector(
														'.js-post-expandable-visible',
													);
												if (
													visibleIcon.classList.contains(
														'd-none',
													)
												) {
													visibleIcon.classList.remove(
														'd-none',
													);
												} else {
													visibleIcon.classList.add(
														'd-none',
													);
												}
											}}
										>
											<span className="js-post-expandable-hidden d-none">
												<svg
													aria-hidden="true"
													className="svg-icon iconArrowRightSm"
													width="14"
													height="14"
													viewBox="0 0 14 14"
												>
													<path d="M5 11V3l4 4-4 4Z"></path>
												</svg>
											</span>
											<span className="js-post-expandable-visible">
												<svg
													aria-hidden="true"
													className="svg-icon iconArrowDownSm"
													width="14"
													height="14"
													viewBox="0 0 14 14"
												>
													<path d="M3 5h8L7 9 3 5Z"></path>
												</svg>
											</span>
										</button>
										<div className="flex--item as-center fs-body2 mt2 md:mt0">
											<a
												href="/questions/40050774/github-commits-pile-up-after-squash-merge-of-pull-request/72120005#72120005"
												className="answer-hyperlink "
											>
												github commits pile up after
												squash merge of pull request
											</a>
										</div>
									</div>
								</div>
								<div
									className="s-expandable is-expanded"
									id="expandable-1651881600-72120005"
								>
									<div className="js-post-expandable-body s-expandable--content bg-black-050 js-loaded">
										<div>
											<div className="d-flex g4 p8 py2 md:p6 fw-wrap bb bc-black-075">
												<div className="d-flex g4 ai-center jc-end fs-caption wmn1 md:fd-row-reverse fc-black-500">
													<span title="received a bounty for an answer">
														bounty
													</span>
													<span className="s-badge baw0 bg-transparent fc-blue-500">
														+500
													</span>
												</div>
												<div className="s-user-card s-user-card__minimal jc-end">
													<time
														className="s-user-card--time ws-nowrap"
														title="2022-05-07 18:35:49Z"
													>
														7 hours ago{' '}
													</time>
												</div>
											</div>
											<div className="d-flex g4 p8 py2 md:p6 fw-wrap">
												<div className="d-flex g4 ai-center jc-end fs-caption wmn1 md:fd-row-reverse fc-black-500">
													<span title="answer was upvoted 1 time">
														upvote
													</span>
													<span className="s-badge baw0 bg-transparent fc-green-500">
														+2
													</span>
												</div>
												<div className="s-user-card s-user-card__minimal jc-end">
													<time
														className="s-user-card--time ws-nowrap"
														title="2022-05-07 18:35:24Z"
													>
														7 hours ago{' '}
													</time>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
