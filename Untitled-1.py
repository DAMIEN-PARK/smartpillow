# streamlit이 설치되어 있지 않을 경우 실행되지 않으므로, streamlit이 설치되어 있는 환경에서 실행 필요
# 또는 아래 명령어로 먼저 설치: pip install streamlit

try:
    import streamlit as st
    import pandas as pd
    import seaborn as sns
    import matplotlib.pyplot as plt
    import matplotlib
    from matplotlib import font_manager, rc

    # 한글 폰트 설정
    plt.rcParams['font.family'] = 'Malgun Gothic'
    plt.rcParams['axes.unicode_minus'] = False  # 마이너스 기호 깨짐 방지

    # Sample A/B Test Results Data
    data = {
        'Group': ['Control', 'A: 할인 쿠폰', 'B: 개인화 + 쿠폰', 'C: 피드백 + 쿠폰'],
        'Customer_Count': [220, 220, 220, 223],
        'Response_Count': [0, 0, 0, 92],
        'Repurchase_Count': [12, 23, 38, 45],
        'Total_Revenue': [2500.0, 5200.0, 8500.0, 9700.0],
        'Coupon_Use_Count': [0, 20, 35, 42]
    }

    df = pd.DataFrame(data)

    df["Avg_Revenue_per_User"] = (df["Total_Revenue"] / df["Customer_Count"]).round(2)
    df["Repurchase_Rate"] = (df["Repurchase_Count"] / df["Customer_Count"]).round(4)
    df["Coupon_Use_Rate"] = (df["Coupon_Use_Count"] / df["Customer_Count"]).round(4)
    df["Response_Rate"] = (df["Response_Count"] / df["Customer_Count"]).round(4)

    st.title("A/B 테스트 결과 대시보드")

    st.subheader("📊 요약 테이블")
    st.dataframe(df)

    # 시각화 1: 재구매율
    st.subheader("1. 그룹별 재구매율")
    fig1, ax1 = plt.subplots()
    sns.barplot(data=df, x="Group", y="Repurchase_Rate", palette="Set2", ax=ax1)
    ax1.set_ylabel("재구매율")
    ax1.set_xlabel("")
    ax1.set_title("그룹별 재구매율 비교")
    plt.xticks(rotation=45)
    st.pyplot(fig1)

    # 시각화 2: 1인당 평균 매출
    st.subheader("2. 그룹별 1인당 평균 매출")
    fig2, ax2 = plt.subplots()
    sns.barplot(data=df, x="Group", y="Avg_Revenue_per_User", palette="Set3", ax=ax2)
    ax2.set_ylabel("1인당 평균 매출")
    ax2.set_xlabel("")
    ax2.set_title("그룹별 사용자당 평균 매출")
    plt.xticks(rotation=45)
    st.pyplot(fig2)

    # 시각화 3: 응답률
    st.subheader("3. 그룹별 응답률 (C그룹 중심)")
    fig3, ax3 = plt.subplots()
    sns.barplot(data=df, x="Group", y="Response_Rate", palette="coolwarm", ax=ax3)
    ax3.set_ylabel("응답률")
    ax3.set_xlabel("")
    ax3.set_title("그룹별 응답률 비교")
    plt.xticks(rotation=45)
    st.pyplot(fig3)

    st.caption("\n\n📊 데이터 기반 인사이트: C 그룹 전략은 재구매율, 응답률, 평균 매출 모든 면에서 우수한 성과를 보였습니다. 이를 바탕으로 향후 전체 고객을 대상으로 확장할 전략을 설계할 수 있습니다.")

except ModuleNotFoundError as e:
    print("[ERROR] 필요한 라이브러리가 설치되어 있지 않습니다. 다음 명령어로 설치 후 실행하세요:")
    print("pip install streamlit seaborn matplotlib")
    print("\n에러 상세:", e) 